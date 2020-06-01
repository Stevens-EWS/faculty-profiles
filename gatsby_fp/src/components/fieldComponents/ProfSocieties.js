import React from "react"
const shortid = require("shortid")

export default function ProfSocieties({ profSocietiesList }) {
  return (
    <>
      <div className="sectiontitle">Professional Societies</div>
      <div>
        <ul>
          {profSocietiesList.map(element => (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: ` 
              ${
                element.org
                  ? `
                org: ${element.org}<br> `
                  : ``
              } 
              ${
                element.status
                  ? `
                orgabbr: ${element.orgabbr}<br> `
                  : ``
              }               
          `,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  )
}
