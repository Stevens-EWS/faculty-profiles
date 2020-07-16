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
          <table
            cellPadding="5"
            cellSpacing="0"
            border="0"
            className="bioregion"
            width="100%"
          >
            <tbody>
              <tr>
                <td valign="top" align="left" width="160px">
                  <img
                    src={`data:image/jpeg;base64,${imgsrc}`}
                    className="bioimage"
                    alt={`${firstName} ${lastName}`}
                  />
                </td>
                <td valign="top" align="left">
                  <div className="table_wrapper">
                    <div className="table_wrapper_inner">
                      <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                          <tr>
                            <td
                              valign="top"
                              dangerouslySetInnerHTML={{ __html: title }}
                            ></td>
                          </tr>
                          {school ? (
                            <tr>
                              <td
                                valign="top"
                                dangerouslySetInnerHTML={{
                                  __html: `School: ${school}`,
                                }}
                              ></td>
                            </tr>
                          ) : null}
                          {department ? (
                            <tr>
                              <td
                                valign="top"
                                dangerouslySetInnerHTML={{
                                  __html: `Department: ${department}`,
                                }}
                              ></td>
                            </tr>
                          ) : null}
                          {building ? (
                            <tr>
                              <td
                                valign="top"
                                dangerouslySetInnerHTML={{
                                  __html: `Building: ${building}`,
                                }}
                              ></td>
                            </tr>
                          ) : null}
                          {room ? (
                            <tr>
                              <td
                                valign="top"
                                dangerouslySetInnerHTML={{
                                  __html: `Room: ${room}`,
                                }}
                              ></td>
                            </tr>
                          ) : null}
                          {phone ? (
                            <tr>
                              <td
                                valign="top"
                                dangerouslySetInnerHTML={{
                                  __html: `Phone: ${phone}`,
                                }}
                              ></td>
                            </tr>
                          ) : null}
                          {fax ? (
                            <tr>
                              <td
                                valign="top"
                                dangerouslySetInnerHTML={{
                                  __html: `Fax: ${fax}`,
                                }}
                              ></td>
                            </tr>
                          ) : null}
                          {email ? (
                            <tr>
                              <td
                                valign="top"
                                dangerouslySetInnerHTML={{
                                  __html: `Email: ${email}`,
                                }}
                              ></td>
                            </tr>
                          ) : null}
                          {website ? (
                            <tr>
                              <td>
                                <a href={website} target="_blank" rel="noreferrer">
                                  Website
                                </a>
                              </td>
                            </tr>
                          ) : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
