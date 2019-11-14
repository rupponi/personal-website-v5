import React from "react"
import NavBar from "../components/navbar/navbar"

import Introduction from "../components/introduction/introduction"
import About from "../components/about/about"
import Experience from "../components/experience/experience"

import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../styles/index.css"

export default ({ data }) => (
  <html>
    <link href = "https://fonts.googleapis.com/css?family=Karla" rel = "stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap" rel="stylesheet"/>
    <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>

    <Helmet>
      <meta charSet = "utf-8"/>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>

    <div id="navbar">
      <NavBar/>
    </div>

    <Introduction/>

    <About/>

    <Experience/>

  </html>
)

export const query = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
