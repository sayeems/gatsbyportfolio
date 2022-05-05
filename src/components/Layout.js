import React from "react"
import Leftbar from "./Leftbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/main.css"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Leftbar />
      <div className="site-main">
        <div className="pt-wrapper">
          <motion.section className="pt-page">{children}</motion.section>
        </div>
      </div>
    </div>
  )
}

export default Layout
