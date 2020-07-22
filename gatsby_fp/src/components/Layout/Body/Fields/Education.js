import React from "react"
const shortid = require("shortid")

export default function Education({ educationList }) {

  const liInnerHTMLList =
  educationList.map(element => { 
    let liString = '';
    if(element.deg  && !element.degother){
      liString += `${element.deg} `
    }
    if(element.degother){
      liString += `${element.degother} `
    }
    if(element.dty_comp){
      liString += `(${element.dty_comp}) `
    }
    if(element.school){
      liString += `${element.school} `
    }         
    if(element.major){
      liString += `(${element.major}) `
    }

    return liString
  })

  return (
    <>
      <div className="sectiontitle">Education</div>
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
