import React from "react"

export default function GeneralSection({ fieldLabel, fieldData }) {
  return (
    <>
      <div className="sectiontitle">{fieldLabel}</div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: fieldData }}></p>
      </div>
    </>
  )
}
