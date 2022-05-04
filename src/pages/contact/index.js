import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <Layout>
      <div className="section-inner custom-page-content">
        <div className="section-title-block second-style">
          <h2 className="section-title">Contact</h2>
          <h5 className="section-description">Get in touch</h5>
        </div>
        <div className="section-content">
          <Row>
            <Col xs={12}>
              <div className="map"></div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  <p>phone icon</p>
                  <h4>+880####</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  <p>location marker icon</p>
                  <h4>Dhaka</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  <p>envelope icon</p>
                  <h4>email address</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="col-inner bs-30">
                <div className="lm-info-block gray-default">
                  <p>no icon</p>
                  <h4>Freelance available</h4>
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
