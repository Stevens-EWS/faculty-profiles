import React from "react"
const shortid = require("shortid")

export default function Education({ educationList }) {


  return (
    <>
      <div className="sectiontitle">Education</div>
      <div>
        <ul>
          {educationList.map(element => (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: ` 
               ${
                 (element.deg && !(element.degother))
                   ? `${element.deg}`
                   : ``
               }
               ${
                (element.degother && !(element.deg))
                   ? `${element.degother}`
                   : ``
               }
               ${
                (element.degother && element.deg)
                   ? `${element.deg}, ${element.degother} `
                   : ``
               }
               ${
                 element.dty_comp
                   ? `(${element.dty_comp})`
                   : ``
               }
              ${
                element.school
                  ? `${element.school}`
                  : ``
              }
              ${
                element.major
                  ? `(${element.major})`
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
