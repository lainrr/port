import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav></Nav>
    </Layout>
  )
}

export default IndexPage
