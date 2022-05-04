import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-bootstrap"
import Timeline from "../../components/Timeline"
import Skill from "../../components/Skill"
import { graphql } from "gatsby"

const expYears = new Date().getFullYear() - 2014

export default function Resume({ data }) {
  const { skill, education, experience } = data
  // console.log(skill)
  return (
    <Layout>
      <div className="section-inner custom-page-content">
        <div className="section-title-block second-style">
          <h2 className="section-title">Resume</h2>
          <h5 className="section-description">
            {expYears} Years of experience
          </h5>
        </div>
        <div className="section-content">
          <Row>
            <Col xs={12} sm={8}>
              <div className="col-inner bs-30">
                <div className="block-title">
                  <h3>Education</h3>
                </div>
                <div className="timeline timeline-second-style clearfix bs-30">
                  {education.edges.map(ex => (
                    <Timeline events={ex.node} key={ex.node.id} />
                  ))}
                </div>
                <div className="block-title">
                  <h3>Experience</h3>
                </div>
                <div className="timeline timeline-second-style clearfix">
                  {experience.edges.map(ex => (
                    <Timeline events={ex.node} key={ex.node.id} />
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="col-inner">
                <div className="block-title">
                  <h3>Skills</h3>
                  <div className="skills-info skills-second-style">
                    {skill.edges.map(sk => (
                      <Skill skills={sk.node} key={sk.node.id} />
                    ))}
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

export const skill = graphql`
  query MyData {
    skill: allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "skill" } } } }
      }
      sort: { fields: acf_skill___order, order: ASC }
    ) {
      edges {
        node {
          id
          title
          acf_skill {
            percentage
            order
          }
        }
      }
    }
    education: allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "education" } } } }
      }
      sort: { fields: acf_education___order, order: ASC }
    ) {
      edges {
        node {
          id
          title
          acf_experience: acf_education {
            order
            organization
            shortDescription
            year
          }
        }
      }
    }
    experience: allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "experience" } } } }
      }
      sort: { fields: acf_experience___order, order: ASC }
    ) {
      edges {
        node {
          id
          title
          acf_experience {
            order
            organization
            shortDescription
            year
          }
        }
      }
    }
  }
`
