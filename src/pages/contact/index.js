import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"
import {
  LocationOn,
  Phone,
  CheckCircleOutline,
  NotInterested,
  MarkunreadOutlined,
} from "@mui/icons-material"
import { Helmet } from "react-helmet"

const Contact = ({ data }) => {
  const contactData = data.contactPage.nodes[0].acf_contact
  return (
    <Layout>
      <Helmet>
        <title>Contact - Sayeem</title>
      </Helmet>
      <div className="section-inner custom-page-content">
        <div className="section-title-block second-style">
          <h2 className="section-title">Contact</h2>
          <h5 className="section-description">Get in touch</h5>
        </div>
        <div className="section-content">
          <Row>
            <Col xs={12}>
              <div
                className="map"
                dangerouslySetInnerHTML={{ __html: contactData.map }}
              ></div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  <Phone />
                  <h4>{contactData.mobile}</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  <LocationOn />
                  <h4>{contactData.location}</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  <MarkunreadOutlined />
                  <h4>
                    <a href={`mailto:${contactData.email}`}>
                      {contactData.email}
                    </a>
                  </h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  {contactData.freelance ? (
                    <CheckCircleOutline />
                  ) : (
                    <NotInterested />
                  )}
                  <h4>Freelance Available</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const contactData = graphql`
  query MyContact {
    contactPage: allWpPage(filter: { title: { eq: "Contact" } }) {
      nodes {
        acf_contact {
          email
          freelance
          location
          map
          mobile
        }
      }
    }
  }
`
