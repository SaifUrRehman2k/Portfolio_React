import React from 'react'

const Container = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <main className="max-w-5xl mx-auto px-2 py-6 md:py-10 space-y-8">
        {children}
      </main>
    </div>
  )
}

export default Container
