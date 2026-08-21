import React from 'react'

const Container = ({children}) => {
  return (
    <div className="min-h-screen font-sans my-4 md:my-24">
      <main className="lg:w-5xl md:w-3xl sm:w-2xl mx-8 md:mx-auto px-0 py-8 md:py-16 space-y-8">
        {children}
      </main>
    </div>
  )
}

export default Container
