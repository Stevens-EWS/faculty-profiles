import React from "react"

export default function ConsultService({ consultService }) {
  return (
    <>
      <div className="sectiontitle">Consulting Service</div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: consultService }}></p>
      </div>
    </>
  )
}
