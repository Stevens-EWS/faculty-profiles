import React from "react"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Body from "../components/Body"

const NotFoundPage = () => (
  <>
    <Header/>
    <Helmet
          bodyAttributes={{
            class: "fs-grid",
          }}
    >
    <title>Not Found - Stevens Institute of Technology</title>
    </Helmet>
    <Body
      bodyContent="Faculty profile not found."
    />
  </>
  
)

export default NotFoundPage
