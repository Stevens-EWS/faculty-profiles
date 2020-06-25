import React from "react"
import { graphql } from "gatsby"
import Fields from "./Layout/Body/Fields"
import Body from "./Layout/Body"
import Head from "./Layout/Head"

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
      {data
        ? <Head
            pageTitle={`${sanitizedData.pf_first_name} ${sanitizedData.pf_last_name} - Stevens Institute of Technology`}
          />
        : <Head
            pageTitle = {`Faculty Profiles - Stevens Institute of Technology`}
          />
      } 
      {data &&
        <Body
          bodyContent={<Fields facultyData={sanitizedData} />}
        />
      }

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
        orgabbr
        status
      }
      intellcont {
        contype
        contypeother
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
          mname
          fname
          lname
        }
      }
    }
  }
`
