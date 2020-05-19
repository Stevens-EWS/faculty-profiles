import React from "react"

export default function PatentInv ({patentInv}){ 
  return(
    <>
    <div className="sectiontitle">Patents and Inventions</div>
        <div>
          <p dangerouslySetInnerHTML={{__html: patentInv}}></p>
        </div>
    </>
  )
}