import { ScrollAnimation, ScrollParallax } from '@/components/core/scroll-animation'
import React from 'react'

const About = () => {
    return (
        <>
            <section className='my-8 sm:my-16 md:my-24'>

                        <div>
                            <h3>About</h3>
                            <p >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat debitis saepe quae sed harum iusto sequi eum veniam molestiae ducimus. Sint aspernatur officia voluptatum repellendus, sapiente facere quibusdam mollitia voluptas.
                            </p>
                        </div>
                <div className='mt-8 sm:mt-16'>
                    <h3>Github activity</h3>
                    <div className='w-[90%] h-80 bg-gray-400'></div>
                </div>
            </section>
        </>
    )
}

export default About
