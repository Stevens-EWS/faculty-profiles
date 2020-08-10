import React from "react"

export default function GeneralSection({ fieldLabel, fieldData }) {
  // Generalized component for sections with only one field
  return (
    <>
      <div className="sectiontitle">{fieldLabel}</div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: fieldData }}></p>
      </div>
    </>
  )
}
