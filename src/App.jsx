import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Container from './components/layout/Container'
import { ArrowUpIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Hero from './components/sections/Hero'
import { DockDemo } from './components/ui/Dock-Demo'
import About from './components/sections/About'
import StackedList from './components/layout/StackedList'

function App() {

  return (
    <>
      <div className='typeset typeset-docs'>
        <Container>
          <Hero />
          <About/>
          <StackedList/>
          <DockDemo/>
        </Container>
      </div>
    </>
  )
}

export default App
