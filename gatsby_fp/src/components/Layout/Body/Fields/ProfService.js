import React from "react"
const shortid = require("shortid")

export default function ProfService({ profServiceList }) {
  
  const liInnerHTMLList =
  profServiceList.map(element => { 
    let liString = '';
    if(element.org){
      liString += `${element.org} `
    }
    if(element.title){
      liString += `${element.title}`
    }

    return liString
  })

  return (
    <>
      <div className="sectiontitle">Professional Service</div>
      <div>
        <ul>
        {liInnerHTMLList.map(element => (
            <li
              key={shortid.generate()}
              dangerouslySetInnerHTML={{
                __html: element
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  )
}
