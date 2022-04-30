import React from "react"
import { Link } from "gatsby"

export const Menu = ({ menuData }) => {
  return (
    <div className="site-nav">
      <ul className="site-main-menu">
        {menuData.map(item => (
          <li key={item.id}>
            <Link
              to={item.url}
              className="menuLink"
              activeClassName="active-link"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Menu
