import React from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

export const Social = () => {
  return (
    <div className="social-links">
      <a href="https://twitter.com/sayeems" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/sayeems/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.facebook.com/sayeems"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
  )
}
export default Social
