import React from "react"

export default function UnivService({ univServiceList }) {
  return (
    <>
      <div className="sectiontitle">Institutional Service</div>
      <div>
        <ul>
          {univServiceList.map((element, index) => (
            // <li key={index} dangerouslySetInnerHTML ={{__html:
            // `${element.scope}<br>${element.member_type} of ${element.org}
            // (${element.dtm_start} ${element.dty_start} - ${element.dtm_end}
            // ${element.dty_end})<br> Compenstated:  ${element.compensation}`}}>
            // </li>
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: ` 
             ${
               element.scope
                 ? `
                scope: ${element.scope}<br> `
                 : ``
             } 
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
              ${
                element.dtm_start
                  ? `
                dtm_start: ${element.dtm_start}<br> `
                  : ``
              } 
              ${
                element.dtd_start
                  ? `
                dtd_start: ${element.dtd_start}<br> `
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
                element.dyd_end
                  ? `
                dyd_end: ${element.dyd_end}<br> `
                  : ``
              } 
              ${
                element.dty_end
                  ? `
                dty_end: ${element.dty_end}<br> `
                  : ``
              }
              ${
                element.compensation
                  ? `
                compensation: ${element.compensation}<br> `
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
          `,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  )
}
