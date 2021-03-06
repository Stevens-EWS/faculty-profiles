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
  website,
  firstName,
  lastName,
  email
}) {
  return (
    <>
      {title && (
        <div className="title">
          <p
            valign="top"
            dangerouslySetInnerHTML={{ __html: title }}
          ></p>
        </div>
      )} 
      <div className="flex_box">
        {imgsrc && (
          <div className="img_wrapper">
            <img
              src={`data:image/jpeg;base64,${imgsrc}`}
              className="bioimage"
              alt={`${firstName} ${lastName}`}
            />
          </div>
        )}
        <div className = "pf_field_wrapper">
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
            <p valign="top">Phone: <a href={phone[0].url}>{phone[0].human_readable}</a></p>
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
            <p valign="top">
              Email: <a href={`mailto:${email}`}>{email}</a>
            </p>
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
