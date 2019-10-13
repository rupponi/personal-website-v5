import React from "react"
import NavBar from "../components/navbar"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../styles/index.css"

function mailButtonClick() {
  let targetButton = document.getElementById("mail-button"), linkOpened = false;

  targetButton.classList.add("animate-ref-button-click");
  targetButton.addEventListener('animationend', () => {
    targetButton.classList.remove("animate-ref-button-click");
    if (!linkOpened) {
      window.open("mailto: upponirohan@gmail.com");
      linkOpened = true;
    }
  });
}

function githubButtonClick() {
  let targetButton = document.getElementById("github-button"), linkOpened = false;

  targetButton.classList.add("animate-ref-button-click");
  targetButton.addEventListener('animationend', () => {
    targetButton.classList.remove("animate-ref-button-click");
    if (!linkOpened) {
      window.open("https://github.com/rupponi", "_blank");
      linkOpened = true;
    }
  });
}

function linkedinButtonClick() {
  let targetButton = document.getElementById("linkedin-button"), linkOpened = false;

  targetButton.classList.add("animate-ref-button-click");
  targetButton.addEventListener('animationend', () => {
    targetButton.classList.remove("animate-ref-button-click");
    if (!linkOpened) {
      window.open("https://linkedin.com/in/rohanupponi", "_blank");
      linkOpened = true;
    }
  });
}

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
      <h1 id = "intro-message">My name is {data.site.siteMetadata.author} and {data.site.siteMetadata.description}</h1>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div id = "mail-button" class="ref-cont" onClick = {mailButtonClick}><i id="mail-ref" class="fa fa-envelope-o"></i></div>
      <div id = "github-button" class="ref-cont" onClick = {githubButtonClick}><i id="github-ref" class="fa fa-github"></i></div>
      <div id = "linkedin-button" class="ref-cont" onClick = {linkedinButtonClick}><i id="linkedin-ref" class = "fa fa-linkedin"></i></div>
    </div>

    <div id = "about">
      <h1 class = "section-title">ABOUT</h1>
      <h1 id = "about-message">
          Hello world! My name's Rohan and I love to build and build what I love. As a new graduate
          software engineer, I enjoy building projects with potential for real-world benefits whether
          for me or for those around me.
          
          <br/><br/>

          Having recently graduated from {" "}
          <a class = "about-links" target = "_blank" rel = "noopener noreferrer" href = "https://cidse.engineering.asu.edu/">
            Barrett Honors College at Arizona State University
          </a>
          {", I have had opportunity to hone my skills in internships with "}
          <a class = "about-links" target = "_blank" rel = "noopener noreferrer" href = "https://www.intel.com/content/www/us/en/homepage.html">
            Intel Corporation
          </a>
          {" and "}
          <a class = "about-links" target = "_blank" rel = "noopener noreferrer" href = "https://stchealth.com/">
            STC Health
          </a>
          {". "}


          <br/><br/>
      </h1>
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
