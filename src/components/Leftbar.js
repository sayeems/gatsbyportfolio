import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMenuQuery } from "../hooks/useMenuQuery"
import Menu from "./Menu"
import { GatsbyImage } from "gatsby-plugin-image"
import Social from "./Social"
import Copyright from "./Copyright"

const logoQuery = graphql`
  query myLogo {
    wpMediaItem(title: { eq: "sayeem_logo" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
    wp {
      generalSettings {
        title
      }
    }
  }
`

const Leftbar = () => {
  const myMenu = useMenuQuery()
  const siteLogo = useStaticQuery(logoQuery)
  return (
    <div className="header mobile-menu-hide">
      <div className="header-content clearfix">
        <div className="my-photo">
          <GatsbyImage
            image={
              siteLogo.wpMediaItem.localFile.childImageSharp.gatsbyImageData
            }
            alt="logo"
          />
        </div>
        <div className="site-title-block">
          <div className="site-title">{siteLogo.wp.generalSettings.title}</div>
        </div>
        <Menu menuData={myMenu.allWpMenu.nodes[0].menuItems.mainMenuItems} />
        <Social />
        <Copyright />
      </div>
    </div>
  )
}

export default Leftbar
