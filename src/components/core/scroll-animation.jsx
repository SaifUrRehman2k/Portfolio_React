'use client';
import {
    motion,
    useInView,
    useScroll,
    useTransform,
} from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

const EASE_OUT_STRONG = [0.23, 1, 0.32, 1];

// export const ScrollAnimationPreset = 'fade-up' | 'scale-in' | 'clip-reveal';

// type Preset = {
//   variants: Variants;
//   duration: number;
// };

const PRESETS = {
    'fade-up': {
        variants: {
            hidden: { opacity: 0, y: 128 },
            visible: { opacity: 1, y: 0 },
        },
        duration: 1,
    },
    'scale-in': {
        variants: {
            hidden: { opacity: 0, scale: 0.80 },
            visible: { opacity: 1, scale: 1 },
        },
        duration: 0.5,
    },
    'clip-reveal': {
        variants: {
            hidden: { clipPath: 'inset(100%, 100%, 100%, 100%)' },
            visible: { clipPath: 'inset(0%, 0%, 0%, 0%)' },
        },
        duration: 0.7,
    },
};

function revealStateOf(isRevealed) {
    if (isRevealed) {
        return 'visible';
    }
    return 'hidden';
}

// Under reduced motion both states are the final one, so the element is written in place on
// mount instead of keeping the hidden styles rendered on the server.
function variantsOf(
    preset,
    prefersReducedMotion
) {
    const { variants } = PRESETS[preset];
    if (prefersReducedMotion) {
        return { hidden: variants.visible, visible: variants.visible };
    }
    return variants;
}

// export type ScrollAnimationProps = {
//   children: ReactNode;
//   preset?: ScrollAnimationPreset;
//   delay?: number;
//   amount?: number;
//   className?: string;
//   containerRef?: RefObject<HTMLElement | null>;
// };

export function ScrollAnimation({
    children,
    preset = 'fade-up',
    delay = 0.2,
    amount = 0.1,
    className,
    containerRef,
}) {
    const ref = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const isInView = useInView(ref, { root: containerRef, once: true, amount });
    const revealState = revealStateOf(isInView);
    const variants = variantsOf(preset, prefersReducedMotion);
    const transition = {
        duration: PRESETS[preset].duration,
        ease: EASE_OUT_STRONG,
        delay,
    };

    return (
        <motion.div
            ref={ref}
            initial='hidden'
            animate={revealState}
            variants={variants}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function layerOffsetOf(
    prefersReducedMotion,
    offset
) {
    if (prefersReducedMotion) {
        return 20;
    }
    return offset;
}

// export type ScrollParallaxProps = {
//   children: ReactNode;
//   strength?: number;
//   className?: string;
//   layerClassName?: string;
//   containerRef?: RefObject<HTMLElement | null>;
// };

export function ScrollParallax({
    children,
    strength = 60,
    className,
    layerClassName,
    containerRef,
}) {
    const frameRef = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const { scrollYProgress } = useScroll({
        target: frameRef,
        container: containerRef,
        offset: ['start end', 'end start'],
    });
    const offset = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
    const reach = Math.abs(strength);
    const bleed = -reach;
    const layerOffset = layerOffsetOf(prefersReducedMotion, offset);

    return (
        <div ref={frameRef} className={cn('relative overflow-clip', className)}>
            <motion.div
                style={{
                    y: layerOffset,
                    top: bleed,
                    bottom: bleed,
                }}
                className={cn('inset-x-0', layerClassName)}
            >
                {children}
            </motion.div>
        </div>
    );
}
