import React from "react"
const shortid = require("shortid")

export default function ProfService({ profServiceList }) {
  return (
    <>
      <div className="sectiontitle">Professional Service</div>
      <div>
        <ul>
          {profServiceList.map(element => (
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
                  element.title
                    ? `
                  ${element.title}`
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
