import React from "react"
import Head from "../components/Head"
import Header from "../components/Header"
import Body from "../components/Body"

const NotFoundPage = () => (
  <>
    <Head
      pageTitle={`Not Found - Stevens Institute of Technology`}
    />
    <Header/>
    <Body
      bodyContent="Faculty profile not found."
    />
  </>
  
)

export default NotFoundPage
