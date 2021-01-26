import React from "react"
const shortid = require("shortid")

export default function ProfSocieties({ profSocietiesList }) {

  // Creates a list that is ready to be mapped into <li> tags
  const liInnerHtmlList =
    profSocietiesList.map(element => {
      let liString = ''
      if (element.orgabbr) {
        liString += `${element.orgabbr} `
      }
      if (element.orgabbr && element.org) {
        liString += `– `
      }
      if (element.org) {
        liString += `${element.org} `
      }
      if (element.status) {
        liString += `${element.status}`
      }
      return liString
    })

  return (
    <>
      <div className="sectiontitle">Professional Societies</div>
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
