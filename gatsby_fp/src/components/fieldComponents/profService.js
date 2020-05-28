import React from "react"
const shortid = require("shortid")

export default function ProfService({ profServiceList }) {
  return (
    <>
      <div className="sectiontitle">Professional Service</div>
      <div>
        <ul>
          {profServiceList.map(element=> (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: ` 
               ${
                 element.type
                   ? `
                  type: ${element.type}<br> `
                   : ``
               }
                ${
                  element.type_other
                    ? `
                  type_other: ${element.type_other}<br> `
                    : ``
                }
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
                ${
                  element.dtm_start
                    ? `
                  dtm_start: ${element.dtm_start}<br> `
                    : ``
                } 
                ${
                  element.dty_start
                    ? `
                  dty_start: ${element.dty_start}<br> `
                    : ``
                }
                ${
                  element.dtm_end
                    ? `
                  dtm_end: ${element.dtm_end}<br> `
                    : ``
                }  
                ${
                  element.dty_end
                    ? `
                  dty_end: ${element.dty_end}<br> `
                    : ``
                }
                ${
                  element.compensated
                    ? `
                  compensated: ${element.compensated}<br> `
                    : ``
                }
                ${
                  element.desc
                    ? `
                  desc: ${element.desc}<br> `
                    : ``
                }
                ${
                  element.elecapp
                    ? `
                  elecapp: ${element.elecapp}<br> `
                    : ``
                }
                ${
                  element.exofficio
                    ? `
                  exofficio: ${element.exofficio}<br> `
                    : ``
                }
                ${
                  element.city
                    ? `
                  city: ${element.city}<br> `
                    : ``
                }
                ${
                  element.state
                    ? `
                  state: ${element.state}<br> `
                    : ``
                }
                ${
                  element.country
                    ? `
                  country: ${element.country}<br> `
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
