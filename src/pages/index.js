import React from "react"
import NavBar from "../components/navbar"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../styles/index.css"

export default ({ data }) => (
  <html>
    <link href = "https://fonts.googleapis.com/css?family=Karla" rel = "stylesheet"></link>

    <Helmet>
      <meta charSet = "utf-8"/>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>


    <div id="navbar">
      <NavBar/>
    </div>

    <div id = "introduction">
      <h1 id = "testing-message">My name is {data.site.siteMetadata.author} and {data.site.siteMetadata.description}</h1>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="ref-cont">
        <a target = "_blank" rel = "noreferrer noopener" href = "mailto: upponirohan@gmail.com"><i id="mail-ref" class="fa fa-envelope-o"></i></a>
      </div>
      <div class="ref-cont">
        <a target = "_blank" rel = "noreferrer noopener" href = "https://github.com/rupponi"><i id="github-ref" class="fa fa-github"></i></a>
      </div>
      <div class="ref-cont">
        <a target = "_blank" rel = "noreferrer noopener" href = "https://www.linkedin.com/in/rohan-upponi-139341108/"><i id="linkedin-ref" class = "fa fa-linkedin"></i></a>
      </div>
    </div>

    <div id = "about">
      <h1 class = "section-title">ABOUT</h1>
    </div>

  </html>
)

export const query = graphql`
query {
    site {
      siteMetadata {
        title,
        author,
        description
      }
    }
  }
`
