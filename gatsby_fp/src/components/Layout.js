import React from "react";
import { graphql } from "gatsby";
import Fields from "./Layout/Body/Fields"
import Body from "./Layout/Body"
import Seo from "./Seo.js"
const sanitizeHtml = require("sanitize-html-react")

const Layout = ({ data }) => {

  function sanitizeMarkup(child) {
    return sanitizeHtml(child, {
      allowedTags: ["p", "b", "i", "u", "sup", "sub", "br", "a"],
    })
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
  if (data) {
    var sanitizedData = data.profiles
    traverse(sanitizedData)
  }
    return (
    <>
      {sanitizedData
        ? <Seo
          title={`${sanitizedData.pf_first_name} ${sanitizedData.pf_last_name} - Stevens Institute of Technology`}
          description={`Faculty Profile for ${sanitizedData.pf_first_name} ${sanitizedData.pf_last_name}`}
        />
        : <Seo
          title={`Faculty Profiles - Stevens Institute of Technology`}
          description={`Faculty Profile`}
        />
      }
      {sanitizedData &&
        <Body
          bodyContent={<Fields facultyData={sanitizedData} />}
        />
      }

    </>
  )
};

export const query = graphql`
  query dataByPath($pagePath: String) {
    profiles(pf_username: {eq: $pagePath}) {
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
      pf_work_phone {
        human_readable
        url
      }
      pf_title
      pf_username
      website
      research
      room
      notable_courses
      school
      ses_department
      image {
        local {
          childImageSharp {
            gatsbyImageData(
              placeholder: NONE,
              width: 208,
              layout: CONSTRAINED
            )
          }
          publicURL
        }
      }
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
        orgabbr
        status
      }
      intellcont {
        contype
        contypeother
        pagenum
        status
        title
        title_secondary
        journal_name
        volume
        publisher
        pubctyst
        issue
        dty_pub
        web_address
        intellcont_auth {
          mname
          fname
          lname
        }
      }
      alt_publications
      notable_publications
    }
  }
`

export default Layout;
