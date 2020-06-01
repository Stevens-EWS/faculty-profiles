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
                  element.title
                    ? `
                  title: ${element.title}<br> `
                    : ``
                }
                ${
                  element.org
                    ? `
                  org: ${element.org}<br> `
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
