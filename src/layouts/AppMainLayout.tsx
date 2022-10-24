import React from 'react'
import { NavBar } from 'templates/NavBar/NavBar'

interface LayoutProps {
  children: React.ReactNode
}

export default function AppMainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={`min-h-screen`}>
      <div className="relative z-10">
        <NavBar />
      </div>
      {children}
    </div>
  )
}
