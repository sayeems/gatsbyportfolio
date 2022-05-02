import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-bootstrap"
import Timeline from "../../components/Timeline"
import Skill from "../../components/Skill"

function Resume() {
  return (
    <Layout>
      <div className="section-inner custom-page-content">
        <div className="section-title-block second-style">
          <h2 className="section-title">Resume</h2>
          <h5 className="section-description">Years of experience</h5>
        </div>
        <div className="section-content">
          <Row>
            <Col xs={12} sm={8}>
              <div className="col-inner bs-30">
                <div className="block-title">
                  <h3>Education</h3>
                </div>
                <div className="timeline timeline-second-style clearfix bs-30">
                  <Timeline />
                </div>
                <div className="block-title">
                  <h3>Experience</h3>
                </div>
                <div className="timeline timeline-second-style clearfix">
                  <Timeline />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="col-inner">
                <div className="block-title">
                  <h3>Skills</h3>
                  <div className="skills-info skills-second-style">
                    <Skill />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Resume
