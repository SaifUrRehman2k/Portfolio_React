import React from 'react'

const Container = ({children}) => {
  return (
    <div className="min-h-screen font-sans my-24">
      <main className="max-w-5xl mx-auto px-2 py-8 md:py-16 space-y-8">
        {children}
      </main>
    </div>
  )
}

export default Container
