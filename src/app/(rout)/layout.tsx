import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Readonly<Props>) => {
  return (
    <div className="font-work-sans">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout