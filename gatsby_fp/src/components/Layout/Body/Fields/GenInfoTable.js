import React from "react"

export default function GenInfoTable({
  school,
  department,
  title,
  imgsrc,
  building,
  room,
  phone,
  fax,
  username,
  website,
  firstName,
  lastName,
  email
}) {
  return (
    <>
      <div className="flex_box">
        <div className="img_container">
          <img
            src={`data:image/jpeg;base64,${imgsrc}`}
            className="bioimage"
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div className = "pf_field_wrapper">
          {title && (
            <p
              className="title"
              valign="top"
              dangerouslySetInnerHTML={{ __html: title }}
            ></p>
          )} 
          {school && (
            <p
              valign="top"
              dangerouslySetInnerHTML={{
                __html: `School: ${school}`,
              }}
            ></p>
          )}
          {department && (
            <p
              valign="top"
              dangerouslySetInnerHTML={{
                __html: `Department: ${department}`,
              }}
            ></p>
          )}
          {building && (
            <p
              valign="top"
              dangerouslySetInnerHTML={{
                __html: `Building: ${building}`,
              }}
            ></p>
          )}
          {room && (
            <p
              valign="top"
              dangerouslySetInnerHTML={{
                __html: `Room: ${room}`,
              }}
            ></p>
          )}
          {phone && (
            <p
              valign="top"
              dangerouslySetInnerHTML={{
                __html: `Phone: ${phone}`,
              }}
            ></p>
          )}
          {fax && (
            <p
              valign="top"
              dangerouslySetInnerHTML={{
                __html: `Fax: ${fax}`,
              }}
            ></p>
          )}
          {email && (
            <p
              valign="top"
              dangerouslySetInnerHTML={{
                __html: `Email: ${email}`,
              }}
            ></p>
          )}
          {website && (
            <p>
              <a href={website} target="_blank" rel="noreferrer">
                Website
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  )
}
