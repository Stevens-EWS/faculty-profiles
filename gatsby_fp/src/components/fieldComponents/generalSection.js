import React from "react"

export default function Section({ fieldLabel, fieldData }) {
  return (
    <>
      <div className="sectiontitle">{fieldLabel}</div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: fieldData }}></p>
      </div>
    </>
  )
}
