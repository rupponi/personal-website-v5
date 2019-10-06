import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/navbar"
import "../styles/index.css"

const IndexPage = () => (
  <html>
    <link href = "https://fonts.googleapis.com/css?family=Karla" rel = "stylesheet"></link>


    <div id="navbar">
      <NavBar/>
    </div>
    <div id = "introduction">
      <h1 id = "testing-message">This project is currently in the works. You can check out my current portfolio right <a target = "_blank" href = "https://rohanupponi.com">here</a>!</h1>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="ref-cont">
        <a target = "_blank" href = "mailto: upponirohan@gmail.com"><i id="mail-ref" class="fa fa-envelope-o"></i></a>
      </div>
      <div class="ref-cont">
        <a target = "_blank" href = "https://github.com/rupponi"><i id="github-ref" class="fa fa-github"></i></a>
      </div>
      <div class="ref-cont">
        <a target = "_blank" href = "https://www.linkedin.com/in/rohan-upponi-139341108/"><i id="linkedin-ref" class = "fa fa-linkedin"></i></a>
      </div>
    </div>
  </html>
)

export default IndexPage
