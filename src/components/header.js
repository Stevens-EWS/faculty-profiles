import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" class="header" role="banner">
    <div className="header_container">
      <div className="header_site_link">
        <div className="header_chevron"></div>
        <div className="header_logo">
          <img
            src="images/bw_logo.png"
            alt="Stevens Institute of Technology - The Innovation University&reg;"
          />
        </div>
      </div>
      <div className="secondary_nav"></div>
      <div className="utility_nav nav_hover nav_button_hover"></div>
      <nav className="primary_nav"></nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
