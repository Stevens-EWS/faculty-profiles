import React from "react"

export default function Experience ({experience}){
  return(
    <>
    <div className="sectiontitle">Experience</div>
        <div>
          <p dangerouslySetInnerHTML={{__html: experience}}></p>
        </div>
    </>
  )
}