import React from "react"
import Leftbar from "./Leftbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/main.css"
import { Helmet } from "react-helmet"
import socialImage from "../assets/images/sayeem_social_cover_twitter.jpg"
import { AnimatePresence, motion } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Helmet>
        <meta
          name="description"
          content="The purpose of sayeem.com is to showcase Sayeem Mohammad Shahria's resume and portfolio. Sayeem is a full-stack software developer"
        />
        <meta
          name="keywords"
          content="sayeem, web, developer, software, react, node, PHP, portfolio, bangladeshi, resume"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="sayeem mohammad shahria" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@sayeems" />
        <meta
          property="twitter:title"
          content="Sayeem Mohammad Shahria - Software Developer"
        />
        <meta
          property="twitter:description"
          content="I started my career as a freelancer. After successfully serving, as a freelancer, for a year I joined a traditional software company where I began to learn JavaScript in-depth."
        />
        <meta property="twitter:image" content={socialImage} />

        <meta property="og:url" content="https://www.sayeem.com" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Sayeem Mohammad Shahria - Software Developer"
        />
        <meta
          property="og:description"
          content="I started my career as a freelancer. After successfully serving, as a freelancer, for a year I joined a traditional software company where I began to learn JavaScript in-depth."
        />
        <meta property="og:image" content={socialImage} />
      </Helmet>
      <Leftbar />
      <div className="site-main">
        <div className="pt-wrapper">
          <AnimatePresence>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="pt-page"
            >
              {children}
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Layout
