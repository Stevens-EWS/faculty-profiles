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
      <div className="table_wrapper">
        <div className="table_wrapper_inner">
          <div 
            className="title"
            valign="top"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div className="img_container">
            <img
              src={`data:image/jpeg;base64,${imgsrc}`}
              className="bioimage"
              alt={`${firstName} ${lastName}`}
            />
          </div>
          <div className="table_wrapper">
            <div className="table_wrapper_inner">
              <div className = "pf_field_wrapper">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    {school && (
                      <tr>
                        <td
                          valign="top"
                          dangerouslySetInnerHTML={{
                            __html: `School: ${school}`,
                          }}
                        ></td>
                      </tr>
                    )}
                    {department && (
                      <tr>
                        <td
                          valign="top"
                          dangerouslySetInnerHTML={{
                            __html: `Department: ${department}`,
                          }}
                        ></td>
                      </tr>
                    )}
                    {building && (
                      <tr>
                        <td
                          valign="top"
                          dangerouslySetInnerHTML={{
                            __html: `Building: ${building}`,
                          }}
                        ></td>
                      </tr>
                    )}
                    {room && (
                      <tr>
                        <td
                          valign="top"
                          dangerouslySetInnerHTML={{
                            __html: `Room: ${room}`,
                          }}
                        ></td>
                      </tr>
                    )}
                    {phone && (
                      <tr>
                        <td
                          valign="top"
                          dangerouslySetInnerHTML={{
                            __html: `Phone: ${phone}`,
                          }}
                        ></td>
                      </tr>
                    )}
                    {fax && (
                      <tr>
                        <td
                          valign="top"
                          dangerouslySetInnerHTML={{
                            __html: `Fax: ${fax}`,
                          }}
                        ></td>
                      </tr>
                    )}
                    {email && (
                      <tr>
                        <td
                          valign="top"
                          dangerouslySetInnerHTML={{
                            __html: `Email: ${email}`,
                          }}
                        ></td>
                      </tr>
                    )}
                    {website && (
                      <tr>
                        <td>
                          <a href={website} target="_blank" rel="noreferrer">
                            Website
                          </a>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
