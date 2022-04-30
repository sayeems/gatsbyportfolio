import React from "react"
import Layout from "../../components/Layout"
// import { useStaticQuery, graphql } from "gatsby"

// const portfolioQuery = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `

function Portfolio() {
  // const {
  //   site: {
  //     siteMetadata: { description, title },
  //   },
  // } = useStaticQuery(portfolioQuery)
  return (
    <Layout>
      <h1>Portfolio</h1>
    </Layout>
  )
}

export default Portfolio
