import React from 'react'
import { about } from '@/data'
import my_pic from '../../../assets/my-pic.jpeg'

const Hero = () => {
    return (
        <section className="w-full flex items-center justify-center">
            <div className="w-full max-w-[90vw]  flex flex-col-reverse md:flex-row items-center justify-between gap-8">

                <div className="flex-1 flex flex-col items-start text-left space-y-2 md:space-y-5">
                    <span className="px-3 py-1 text-xs font-medium bg-emerald-600 text-neutral-100 border-2 border-emerald-800 rounded-full">
                        {about.role}
                    </span>

                    <h1>Hi, I'm <span className="text-blue-500 w-full text-nowrap">{` ${about.first_name} ${about.last_name}`}</span> </h1>
                    <h2 >
                        Building modern, scalable & <span className="text-blue-500">interactive</span> web applications.
                    </h2>

                    {/* <div className='w-full flex items-end justify-center'>
                        <img className='md:hidden w-64 m-0' src={my_pic} alt="" srcset="" />
                    </div> */}
                    <strong>
                        I craft clean user interfaces using React, Tailwind CSS, and Vite. Passionate about performant web products and intuitive UX design.
                    </strong>


                </div>

                <div className="flex-1 hidden md:flex items-center justify-center max-w-64 max-h-128 ">
                    <div className=" relative max-w-64 max-h-128 w-48 h-48 sm:w-64 sm:h-96 lg:w-80 lg:h-128 p-1 ">
                        <img
                            alt="Profile"
                            className="w-full h-full object-cover"
                            src={my_pic}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
