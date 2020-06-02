import React from "react"
const shortid = require("shortid")

export default function UnivService({ univServiceList }) {
  return (
    <>
      <div className="sectiontitle">Institutional Service</div>
      <div>
        <ul>
          {univServiceList.map(element => (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: ` 
              ${
                element.member_type
                  ? `
                member_type: ${element.member_type}<br> `
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
