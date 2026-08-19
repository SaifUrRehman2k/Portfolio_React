import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Container from './components/layout/Container'
import { Button } from "@/components/ui/button"
import { DockDemo } from './components/ui/Dock-Demo'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Blog from './pages/Blog'

function App() {

  return (
    <>
      <div className='typeset typeset-docs'>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
          </Routes>
          <DockDemo />
        </Container>

      </div>
    </>
  )
}

export default App
