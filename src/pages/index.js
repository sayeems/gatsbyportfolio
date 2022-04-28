import React from "react"
import Layout from "../components/Layout"
import big from "../assets/images/img_1.jpg"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <h1>Hi, I am Sayeem</h1>
      {/* <img src={big} alt="myimg" style={{ maxWidth: "200px" }} /> */}
      <StaticImage
        src="../assets/images/img_1.jpg"
        alt="myimg"
        placeholder="tracedSVG"
      />
    </Layout>
  )
}
