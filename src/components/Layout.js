import React from 'react'
import Leftbar from './Leftbar'
import "../assets/css/main.css"

const Layout = ({children}) => {
  return (
    <div>
        <Leftbar />
        {children}
    </div>
  )
}

export default Layout