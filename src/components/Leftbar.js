import React from 'react'
import {Link} from 'gatsby'

const Leftbar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/" >About me</Link></li>
            <li><Link to="/resume" >Resume</Link></li>
            <li><Link to="/portfolio" >Portfolio</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
        </ul>
    </div>
  )
}

export default Leftbar