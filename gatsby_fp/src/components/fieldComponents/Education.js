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
                 element.deg
                   ? `
                   deg: ${element.deg}<br> `
                   : ``
               }
               ${
                 element.degother
                   ? `
                  degother: ${element.degother}<br> `
                   : ``
               }
               ${
                 element.dty_comp
                   ? `
                  dty_comp: ${element.dty_comp}<br> `
                   : ``
               }
              ${
                element.school
                  ? `
                  school: ${element.school}<br> `
                  : ``
              }
              ${
                element.major
                  ? `
                  major: ${element.major}<br> `
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
