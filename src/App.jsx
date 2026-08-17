import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Container from './components/layout/Container'
import { ArrowUpIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Hero from './components/sections/Hero'

function App() {

  return (
    <>
      <div className='typeset typeset-docs'>
        <Container>
          <Hero />
        </Container>
      </div>
    </>
  )
}

export default App
