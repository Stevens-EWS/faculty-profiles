import React from "react"
const shortid = require("shortid")

export default function UnivService({ univServiceList }) {

  // Creates a list that is ready to be mapped into <li> tags
  const liInnerHtmlList =
    univServiceList.map(element => {
      let liString = ''
      if (element.org) {
        liString += `${element.org} `
      }
      if (element.member_type) {
        liString += `${element.member_type}`
      }

      return liString
    })

  return (
    <>
      <div className="sectiontitle">Institutional Service</div>
      <div>
        <ul>
          {liInnerHtmlList.map(element => (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: element
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  )
}
