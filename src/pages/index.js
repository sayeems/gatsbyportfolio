import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Col } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <Col xs={12} sm={6} style={{ paddingLeft: 0 }}>
        <div className="inner-content">
          <div className="fill-block">
            <GatsbyImage
              image={
                data.wpPage.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
            />
          </div>
        </div>
      </Col>
      <Col xs={12} sm={6}>
        hello
      </Col>
    </Layout>
  )
}

export const data = graphql`
  query HomeQuery {
    wpPage(slug: { eq: "home" }) {
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`
