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
                ${element.org}`
                  : ``
              } 
              ${
                element.status
                  ? `
               ${element.status}`
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
