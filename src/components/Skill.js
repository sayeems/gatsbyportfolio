import React from "react"

export const Skill = ({ skills }) => {
  return (
    <>
      <div className="clearfix">
        <h4>{skills.title}</h4>
        <div className="skill-value">{skills.acf_skill.percentage}%</div>
      </div>
      <div className="skill-container">
        {/* have to make this CSS part dynamic */}
        <div
          className="skill-percentage skill-1"
          style={{ width: `${skills.acf_skill.percentage}%` }}
        ></div>
      </div>
    </>
  )
}
export default Skill
