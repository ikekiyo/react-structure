import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function SingleLayout({ children }: LayoutProps): JSX.Element {
  return <div className={`w-fullh-full py-8 px-4 bg-white`}>{children}</div>
}
