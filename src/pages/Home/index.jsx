import { ScrollAnimation, ScrollParallax } from '@/components/core/scroll-animation'
import StackedList from '@/components/layout/StackedList'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import React from 'react'

const Home = () => {
    const sections = [<Hero />, <About />, <Education />, <Skills />, <Projects />, <Contact />]
    return (
        <>
            {/* <ScrollAnimation>
                <ScrollParallax>
                    <Hero />
                </ScrollParallax>
            </ScrollAnimation>

            <ScrollAnimation>
                <ScrollParallax>
                    <About />
                </ScrollParallax>
            </ScrollAnimation>

            <ScrollAnimation>
                <ScrollParallax>

                    <Education />
                </ScrollParallax>
            </ScrollAnimation>
            <ScrollAnimation>
                <ScrollParallax>

                    <Skills />
                </ScrollParallax>
            </ScrollAnimation> */}
            {
                sections.map((e) => (
                    <ScrollAnimation>
                        {/* <ScrollParallax> */}
                            {e}
                        {/* </ScrollParallax> */}
                    </ScrollAnimation>
                ))
            }

        </>
    )
}

export default Home
