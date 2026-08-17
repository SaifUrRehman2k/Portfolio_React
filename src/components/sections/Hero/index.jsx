import { ButtonOutline, ButtonPrimary, ButtonRender, ButtonSecondary } from '@/components/ui/Buttons'
import { Button } from '@base-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center px-4 py-12 md:px-8 lg:px-12">
            {/* Main Flex Container */}
            <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">

                {/* Left Column: Text & Call-to-Actions */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                    {/* Badge */}
                    <span className="px-3 py-1 text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-800 rounded-full">
                        Front-End Developer
                    </span>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                        Building modern, scalable & <span className="text-blue-500">interactive</span> web applications.
                    </h1>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm sm:text-base max-w-lg leading-relaxed">
                        I craft clean user interfaces using React, Tailwind CSS, and Vite. Passionate about performant web products and intuitive UX design.
                    </p>

                    {/* Buttons Flex Group */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
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
                         <ButtonPrimary size={"lg"} className={"bg-blue-700 hover:bg-gray-500"}/>
                         <ButtonSecondary size={"lg"} className={"bg-gray-400"}/>
                    </div>
                </div>

                {/* Right Column: Avatar / Profile Image Container */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="border-4 border-black relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-linear-to-tr from-blue-500 to-purple-500">
                        <img
                            src="https://via.placeholder.com/300"
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
