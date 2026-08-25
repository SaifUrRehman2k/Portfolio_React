import StackedList from '@/components/layout/StackedList'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import React from 'react'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Education />
            {/* <StackedList /> */}
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
