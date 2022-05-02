import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Col, Row } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  DevicesOutlined,
  MenuBook,
  CameraAltOutlined,
  DirectionsCarOutlined,
} from "@mui/icons-material"
import TextCaurosel from "../components/TextCaurosel"

export default function Home({ data }) {
  console.log(data)
  // console.log(data.wpPage.acf_home)
  return (
    <Layout>
      <div className="section-inner start-page-full-width">
        <Row style={{ marginRight: 0 }}>
          <Col xs={12} sm={6} style={{ paddingRight: 0 }}>
            <div className="inner-content">
              <div className="fill-block">
                <GatsbyImage
                  image={
                    data.wpPage.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt="sayeem mohammad shahria"
                />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} style={{ padding: 0 }}>
            <div className="inner-content">
              <div className="hp-text-block">
                {/* <div className="carousel">{data.wpPage.acf_home.titles}</div> */}
                <div className="carousel">
                  <TextCaurosel longText={data.wpPage.acf_home.titles} />
                </div>
                <h1 className="hp-main-title">{data.wpPage.acf_home.name}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.wpPage.acf_home.aboutMyself,
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="section-inner custom-page-content">
        <div className="page-content">
          <Row>
            <Col xs={12}>
              <div className="col-inner">
                <div className="block-title">
                  <h3>What I do</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {data.wpPage.acf_home.whatIDo.map(item => (
              <Col xs={12} sm={6} key={item.id}>
                <div className="col-inner">
                  <div className="info-block-w-icon">
                    <div className="ci-icon">
                      {item.whatIDo.icon === "DevicesOutlined" ? (
                        <DevicesOutlined />
                      ) : item.whatIDo.icon === "MenuBook" ? (
                        <MenuBook />
                      ) : item.whatIDo.icon === "CameraAltOutlined" ? (
                        <CameraAltOutlined />
                      ) : item.whatIDo.icon === "DirectionsCarOutlined" ? (
                        <DirectionsCarOutlined />
                      ) : (
                        <DevicesOutlined />
                      )}
                    </div>
                    <div className="ci-text">
                      <h4>{item.title}</h4>
                      <p>{item.whatIDo.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query HomeQuery {
    wpPage(slug: { eq: "home" }) {
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
      acf_home {
        aboutMyself
        name
        titles
        whatIDo {
          ... on WpPost {
            id
            title
            whatIDo {
              description
              icon
            }
          }
        }
      }
    }
  }
`
