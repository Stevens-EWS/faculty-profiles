import React from "react"
const shortid = require("shortid")

export default function ProfService({ profServiceList }) {

  const liInnerHtmlList =
    profServiceList.map(element => {
      let liString = '';
      if (element.org) {
        liString += `${element.org} `
      }
      if (element.title) {
        liString += `${element.title}`
      }

      return liString
    })

  return (
    <>
      <div className="sectiontitle">Professional Service</div>
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
