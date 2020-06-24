import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Helmet from "react-helmet"
import Header from "../components/Header"

const NotFoundPage = () => (
  <>
    <Header/>
    <Helmet
          bodyAttributes={{
            class: "fs-grid",
          }}
    >
    <title>Not Found - Stevens Institute of Technology</title>
    </Helmet>
    <div className="header_push_mobile"></div>
      <div className="page_wrapper js-navigation_push">
        {/* Page : Main Content */}
        <main id="page" className="page" role="main" tabIndex="-1">
          {/* Page Content */}
          <section className="page_content_area">
            <hr className="top-bar" />
            <div className="fs-row">
              {/* Right Sidebar Navigation */}
              <aside className="sidebar sidebar_subnavigation fs-cell-right fs-lg-3"></aside>

              {/* Left Content Area */}

              <div className="page_content fs-cell fs-lg-12">Faculty profile not found.</div>
              {/* END: page_content */}

              {/* Right Sidebar Callouts */}
              <aside className="sidebar sidebar_callouts fs-cell-right fs-lg-3"></aside>
            </div>
          </section>
        </main>
      </div>
    
  </>
  
)

export default NotFoundPage
