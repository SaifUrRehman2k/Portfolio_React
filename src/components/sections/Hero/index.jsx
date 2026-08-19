import { ButtonOutline, ButtonPrimary, ButtonRender, ButtonSecondary } from '@/components/ui/Buttons'
import { Button } from '@base-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <section className="w-full flex items-center justify-center">
            {/* Main Flex Container */}
            <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">

                {/* Left Column: Text & Call-to-Actions */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                    {/* Badge */}
                    <span className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-400 rounded-full">
                        Front-End Developer
                    </span>

                    {/* Heading */}
                    <h1>
                        Building modern, scalable & <span className="text-blue-500">interactive</span> web applications.
                    </h1>

                    {/* Description */}
                    <strong>
                        I craft clean user interfaces using React, Tailwind CSS, and Vite. Passionate about performant web products and intuitive UX design.
                    </strong>

                    {/* Buttons Flex Group */}
                    {/* <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"> */}
                        {/* <a
                            href="#projects"
                            className="w-full sm:w-auto text-center px-6 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-neutral-200 transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto text-center px-6 py-3 bg-neutral-900 text-white font-medium text-sm rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors"
                        >
                            Get in Touch
                        </a> */}      
                </div>

                {/* Right Column: Avatar / Profile Image Container */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="border-4 border-black relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-linear-to-tr from-blue-500 to-purple-500">
                        <img
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-black m-0"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
