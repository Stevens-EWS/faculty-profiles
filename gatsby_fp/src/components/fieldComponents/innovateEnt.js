import React from "react"

export default function InnovateEnt ({innovateEnt}){
  return(
    <>
    <div className="sectiontitle">Innovation and Entrepreneurship</div>
        <div>
          <p dangerouslySetInnerHTML={{__html: innovateEnt}}></p>
        </div>
    </>
  )
}