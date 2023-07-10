import React, { ReactNode } from 'react'
import logo from './logo.svg'
interface IProps {
  children: ReactNode
}
const Layout = ({ children }: IProps) => {
  return (
    <div>
      <header>
        <img src={logo} alt='logo' style={{ width: 150, marginBlock: 10 }} />
      </header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  )
}

export default Layout
