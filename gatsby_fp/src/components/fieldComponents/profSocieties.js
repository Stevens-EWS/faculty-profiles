import React from "react"

export default function ProfSocieties ({profSocietiesList}){
  return(
    <>
    <div className="sectiontitle">Professional Societies</div>
        <div>
          <ul>
          {profSocietiesList.map((element, index) => (
            // <li key={index} dangerouslySetInnerHTML ={{__html: 
            //   `${element.orgabbr} - ${element.org} (${element.dtm_start} ${element.dtd_start} 
            //   ${element.dty_start} - ${element.dtm_end} ${element.dtd_end} ${element.dty_end})
            //   <br>${element.status}`}}>
            // </li>
            <li key={index} dangerouslySetInnerHTML ={{__html:` 
              ${element.org ? `
                org: ${element.org}<br> `:
                ``
              } 
              ${element.orgabbr ? `
                orgabbr: ${element.orgabbr}<br> `:
                ``
              } 
              ${element.status ? `
                orgabbr: ${element.orgabbr}<br> `:
                ``
              } 
              ${element.dtm_start ? `
                dtm_start: ${element.dtm_start}<br> `:
                ``
              } 
              ${element.dtd_start ? `
                dtd_start: ${element.dtd_start}<br> `:
                ``
              } 
              ${element.dty_start ? `
                dty_start: ${element.dty_start}<br> `:
                ``
              }
              ${element.dtm_end ? `
                dtm_end: ${element.dtm_end}<br> `:
                ``
              } 
              ${element.dtd_end ? `
                dtd_end: ${element.dtd_end}<br> `:
                ``
              } 
              ${element.dty_end ? `
                dty_end: ${element.dty_end}<br> `:
                ``
              }
          `}}>
            </li>
	      	))}
          </ul>
        </div>
    </>
  )
}
