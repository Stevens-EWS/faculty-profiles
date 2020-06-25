import React from "react"
import Head from "../components/Layout/Head"
import Header from "../components/Layout/Body/Header"
import Body from "../components/Layout/Body"

const NotFoundPage = () => (
  <>
    <Head
      pageTitle={`Not Found - Stevens Institute of Technology`}
    />
    <Body
      bodyContent="Faculty profile not found."
    />
  </>
  
)

export default NotFoundPage
