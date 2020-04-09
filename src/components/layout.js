/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <a href="#page" id="skip_to_content" className="offscreen">
        Skip to Main Content
      </a>
      <div className="header_push_mobile"></div>

      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="page_wrapper js-navigation_push">
        {/* Page : Main Content */}
        <main id="page" className="page" role="main" tabindex="-1">
          {/* Page Content */}
          <section className="page_content_area">
            <hr className="top-bar" />
            <div className="fs-row">
              {/* Right Sidebar Navigation */}
              <aside className="sidebar sidebar_subnavigation fs-cell-right fs-lg-3"></aside>

              {/* Left Content Area */}
              <div className="page_content fs-cell fs-lg-12">
                {/* Main faculty data */}
              </div>
              {/* END: page_content */}

              {/* Right Sidebar Callouts */}
              <aside className="sidebar sidebar_callouts fs-cell-right fs-lg-3"></aside>
            </div>
          </section>
          {/* END: page_content_area */}
        </main>
        {/* END: page */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
