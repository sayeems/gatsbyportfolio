import React from 'react'
import Leftbar from './Leftbar'

const Layout = ({children}) => {
  return (
    <div>
        <Leftbar />
        {children}
    </div>
  )
}

export default Layout