import React from "react"

export default function Education({ educationList }) {
  return (
    <>
      <div className="sectiontitle">Education</div>
      <div>
        <ul>
          {educationList.map((element, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: `${element.deg} (${element.dty_comp})
             ${element.school} (${element.major}) in ${element.city}, ${element.state}, ${element.country}`,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  )
}
