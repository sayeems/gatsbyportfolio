import React from "react"
import Leftbar from "./Leftbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/main.css"
import { Row, Container } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Leftbar />
      <div className="site-main">
        <div className="pt-wrapper">
          <section className="pt-page">
            <div className="section-inner start-page-full-width">
              <Container>
                <Row>{children}</Row>
              </Container>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Layout
