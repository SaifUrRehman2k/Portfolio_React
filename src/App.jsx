import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Container from './components/layout/Container'
import { ArrowUpIcon, Route } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Hero from './components/sections/Hero'
import { DockDemo } from './components/ui/Dock-Demo'
import About from './components/sections/About'
import StackedList from './components/layout/StackedList'
import IconBadge from './components/ui/Badge'
import Skills from './components/sections/Skills'
import { CardImageWithList } from './components/layout/Card'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { Routes } from 'react-router'

function App() {

  return (
    <>
      <div className='typeset typeset-docs'>
        <Container>
          <Hero />
          <About />
          <StackedList />
          <StackedList />
          <Skills />
          <Projects />
          <Contact />
          {/* <Routes>
            <Route index />
          </Routes> */}
          <DockDemo />
        </Container>

      </div>
    </>
  )
}

export default App
