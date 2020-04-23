import React from "react"
import { graphql } from "gatsby"

export default function GenInfoTable({ data }){
  const dataFields = data.restApiEmployees
  return(
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
                      src=""
                      className="bioimage"
                      style={{ maxWidth: "150px" }}
                    />
                  </td>
                  <td valign="top" align="left">
                    <div className="table_wrapper">
                      <div className="table_wrapper_inner">
                        <table cellPadding="0" cellSpacing="0" border="0">
                          <tbody>
                            <tr>
                              <td valign="top">Test Username: {data.restApiEmployees.pf_username}</td>
                            </tr>
                            <tr>
                              <td valign="top">
                              </td>
                            </tr>
                            <tr>
                              <td valign="top"></td>
                            </tr>
                            <tr>
                              <td valign="top"></td>
                            </tr>
                            <tr>
                              <td valign="top"></td>
                            </tr>
                            <tr>
                              <td valign="top"></td>
                            </tr>
                            <tr>
                              <td valign="top"></td>
                            </tr>
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

export const postQuery = graphql`
  query dataByPath($path: String!){
    restApiEmployees(path: {eq: $path}){
          path
          pf_address
          pf_email
          pf_fax
          pf_first_name
          pf_last_name
          pf_phone
          pf_title
          pf_username
    }
  }
`