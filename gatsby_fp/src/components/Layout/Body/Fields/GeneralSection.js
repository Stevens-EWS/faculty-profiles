import React from "react"

// Generalized component for sections with only one field
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
