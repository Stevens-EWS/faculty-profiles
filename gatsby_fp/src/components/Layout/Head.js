import React from "react"
import Helmet from "react-helmet"

export default function Head({ pageTitle }) {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "fs-grid",
        }}
      >
        <title>{pageTitle}</title>
      </Helmet>  
    </>
  )
}