import React from "react"

export const Timeline = ({ events }) => {
  return (
    <div className="timeline-item clearfix">
      <div className="left-part">
        <h5 className="item-period">2014 - Current</h5>
        <span className="item-company">Upwork</span>
      </div>
      <div className="divider"></div>
      <div className="right-part">
        <h4 className="item-title">Front-end Developer</h4>
        <p>
          Worked for several happy clients. Mostly contributed in the front-end
          section. Developed number of ecommerce application using WordPress.
        </p>
      </div>
    </div>
  )
}
export default Timeline
