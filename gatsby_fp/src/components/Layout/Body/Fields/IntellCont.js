import React from "react"
import SubHeading from "./IntellCont/SubHeading.js"
const shortid = require("shortid")

export default function IntellCont({ intellContList }) {

  // Creates a list with all existing contypes a faculty member has
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
  contypeList.sort(); // Puts list into alphabetical order

  // Return list of Subheadings (contypes)
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
