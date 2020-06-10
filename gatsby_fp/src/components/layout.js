import React from "react"
import { graphql } from "gatsby"
import Header from "./header"
import Fields from "./fields"
import Helmet from "react-helmet"

export default function Layout({ children, data }) {
  const sanitizeHtml = require("sanitize-html-react")
  function sanitizeMarkup(child) {
    return sanitizeHtml(child, {
      allowedTags: ["p", "b", "i", "u", "sup", "sub", "br"],
    })
  }
  if (data) {
    var sanitizedData = data.multiApiSourcePeopleFaculty
  }
  function traverse(parent) {
    for (let child in parent) {
      if (parent[child] !== null && typeof parent[child] == "object") {
        //going one step down in the object tree!!
        traverse(parent[child])
      } else {
        if (parent[child]) {
          parent[child] = sanitizeMarkup(parent[child])
        }
      }
    }
  }

  traverse(sanitizedData)

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "fs-grid",
        }}
      >
        <title>{sanitizedData.pf_first_name} {sanitizedData.pf_last_name} - Stevens Institute of Technology</title>
      </Helmet>
      <a href="#page" id="skip_to_content" className="offscreen">
        Skip to Main Content
      </a>
      <div className="header_push_mobile"></div>

      <Header />

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

              <div className="page_content fs-cell fs-lg-12">
                {data && <Fields facultyData={sanitizedData} />}
              </div>
              {/* END: page_content */}

              {/* Right Sidebar Callouts */}
              <aside className="sidebar sidebar_callouts fs-cell-right fs-lg-3"></aside>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export const facultyData = graphql`
  query dataByPath($pagePath: String!) {
    multiApiSourcePeopleFaculty(pf_username: { eq: $pagePath }) {
      appointment
      bio
      building
      consult_service
      experience
      grant_contract
      honor_award
      innovate_enterpreneur
      patent_invention
      pf_email
      pf_work_fax
      pf_first_name
      pf_last_name
      pf_work_phone
      pf_title
      pf_username
      website
      research
      room
      photo_base64
      notable_courses
      school
      ses_department
      service_university {
        org
        member_type
      }
      service_professional {
        title
        org
      }
      education {
        dty_comp
        deg
        degother
        school
        state
        country
        major
      }
      member {
        org
        status
      }
      intellcont {
        contype
        contypeother
        journal_name
        pagenum
        status
        title
        volume
        publisher
        pubctyst
        issue
        dty_pub
        dty_acc
        dty_sub
        web_address
        intellcont_auth {
          faculty_name
          fname
          lname
        }
      }
    }
  }
`
