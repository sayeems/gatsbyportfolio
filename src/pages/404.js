import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const NotFound = () => {
  return (
    <Layout>
      <div
        className="section-inner start-page-full-width"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "30px",
          justifyContent: "center",
        }}
      >
        <div className="image-container">
          <StaticImage
            src="../assets/images/inside-out.png"
            placeholder="svg"
            alt="not-found"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </div>
        <div className="text-container" style={{ textAlign: "center" }}>
          <h2>Awww...Don't Cry</h2>
          <p>It's just a 404 Error!!</p>
          <p>
            What you're looking for may have been misplaced in Long Term Memory
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
