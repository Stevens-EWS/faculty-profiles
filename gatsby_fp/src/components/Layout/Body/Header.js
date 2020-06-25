import React from "react"

const Header = () => (
  <header id="header" className="header" role="banner">
    <div className="header_container">
    <a href= "https://www.stevens.edu"/>
        <div className="header_chevron"></div>
        <div className="header_logo">
          <img
            src="/images/bw_logo.png"
            alt="Stevens Institute of Technology - The Innovation University&reg;"
          />
        </div>
      <div className="secondary_nav"></div>
      <div className="utility_nav nav_hover nav_button_hover"></div>
      <nav className="primary_nav"></nav>
    </div>
  </header>
)

export default Header
