import React from 'react'
import { Navbar } from '@/components/NavBar'

export default function Home() {
  return (
    <div className="font-geist-sans font-geist-mono antialiased bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to R&R Pizzaria</h1>
      </div>
    </div>
  )
}

    