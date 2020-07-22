import React from "react"
const shortid = require("shortid")

export default function ProfSocieties({ profSocietiesList }) {

  const liInnerHTMLList =
    profSocietiesList.map(element => {
      let liString = '';
      if (element.orgabbr) {
        liString += `${element.orgabbr} `
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
          {liInnerHTMLList.map(element => (
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
