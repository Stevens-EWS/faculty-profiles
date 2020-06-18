import React from "react"
import SubHeading from "./intellContComponents/SubHeading.js"
const shortid = require("shortid")

export default function IntellCont({ intellContList }) {

  function findExistingContypes(intellContList){
    var contypeList = []
    intellContList.forEach(element => {
      if(element.contype && !(contypeList.includes(element.contype))){
        if(element.contype !== "Other"){
          contypeList.push(element.contype)
        }
      }
      if(element.contypeother && !(contypeList.includes(element.contypeother))){
        contypeList.push(element.contypeother)
      }
    })
    return contypeList
  }

  const contypeList = findExistingContypes(intellContList)

  return (
    <>
      <div className="sectiontitle">Selected Publications</div>
      <div>
        {contypeList.map(element => (
          <SubHeading 
            key={shortid.generate()}
            intellContList={intellContList}
            publicationType={element}
          />
        ))}
      </div>
    </>
  )
}
