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
                element.org
                  ? `${element.org}`
                  : ``
              } 
              ${
                element.member_type
                  ? `${element.member_type}`
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
