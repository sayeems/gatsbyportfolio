import React from "react"

export const Skill = ({ skills }) => {
  return (
    <>
      <div className="clearfix">
        <h4>JavaScript</h4>
        <div className="skill-value">95%</div>
      </div>
      <div className="skill-container">
        {/* have to make this CSS part dynamic */}
        <div className="skill-percentage skill-1"></div>
      </div>
    </>
  )
}
export default Skill
