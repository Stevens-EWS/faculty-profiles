import React from "react"
import SubHeading from "./IntellCont/SubHeading.js"
const shortid = require("shortid")

export default function IntellCont({ intellContList }) {

  function findExistingContypes(intellContList) {
    var contypeList = []
    intellContList.forEach(element => {
      if (element.contype && !(contypeList.includes(element.contype))) {
        if (!element.contypeother) {
          contypeList.push(element.contype)
        }
      }
      if (element.contypeother && !(contypeList.includes(element.contypeother))) {
        contypeList.push(element.contypeother)
      }
    })
    return contypeList
  }

  const contypeList = findExistingContypes(intellContList);
  contypeList.sort();

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
