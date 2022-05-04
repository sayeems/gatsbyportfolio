import React from "react"

export const Timeline = ({ events }) => {
  return (
    <div className="timeline-item clearfix">
      <div className="left-part">
        <h5 className="item-period">{events.acf_experience.year}</h5>
        <span className="item-company">
          {events.acf_experience.organization}
        </span>
      </div>
      <div className="divider"></div>
      <div className="right-part">
        <h4 className="item-title">{events.title}</h4>
        <p>{events.acf_experience.shortDescription}</p>
      </div>
    </div>
  )
}
export default Timeline
