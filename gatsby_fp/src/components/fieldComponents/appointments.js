import React from "react"

export default function Appointments ({appointments}){
  return(
    <>
    <div className="sectiontitle">Appointments</div>
        <div>
          <p dangerouslySetInnerHTML={{__html: appointments}}></p>
        </div>
    </>
  )
}
