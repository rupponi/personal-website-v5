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
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/>
    <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>

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
      <h1 class = "section-title">A Little Bit More About Me</h1>
      <h1 id = "about-message">

          Hello world! My name's Rohan and I love to build and build what I love. As a new graduate
          software engineer, I enjoy building projects with potential for real-world benefits whether
          for me or for those around me.
          
          <br/><br/>

          Having recently graduated from {" "}
          <a class = "external-links" target = "_blank" rel = "noopener noreferrer" href = "https://cidse.engineering.asu.edu/">
            Barrett Honors College at Arizona State University
          </a>
          {", I have had opportunity to hone my skills in internships with "}
          <a class = "external-links" target = "_blank" rel = "noopener noreferrer" href = "https://www.intel.com/content/www/us/en/architecture-and-technology/intel-optane-technology.html">
            Intel Corporation
          </a>
          {" and "}
          <a class = "external-links" target = "_blank" rel = "noopener noreferrer" href = "https://stchealth.com/">
            STC Health
          </a>
          {". "}

          <br/><br/>

          I like to tackle life one challenge at a time. Whether on the front-end, challenging my
          creativity to design a beautiful interface, or on the backend, to make sure the product
          can do its job with maximum efficiency and effectiveness.

          <br/><br/>

          When I'm not staring at a computer screen, I enjoy keeping myself going with
          morning runs and challenging my inner foodie with something new to try!

      </h1>
    </div>

    <div id = "experience">
      <h1 class = "section-title">Where I've Worked</h1>
      <div id = "experience-partition">
        <div class = "experience-item">
          <div class = "title">
            <div class = "logo-container">
              <span class = "helper"/>
              <a rel = "noopener noreferrer" target = "_blank" href = "https://stchealth.com"><img class = "logo" src = "img/stc-logo.png" alt="STC Work Experience"/></a>
            </div>
            <div class = "outer-title-container">
              <div class = "inner-title-container">
                <div class = "experience-title">Software Development Intern {" "}
                  <a class = "external-links" target = "_blank" rel = "noopener noreferrer" href = "https://stchealth.com/">
                    @ Scientific Technologies Corporation
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class = "experience-timeline">
            (August 2018 - May 2019)
          </div>
          <span class = "experience-content-break"/>
          <div class = "experience-content">
            <ul class = "experience-description">
              <li>
                Developed API routing backend authentication and account data retrieval services
                for front-end web app.
              </li>
              <li>
                Set up CDN delivery of front-end web application with hosted on AWS using CloudFront.
              </li>
              <li>
                Automated AWS infrastructure for immediate deployment and simple scaling of the backend
                services using CloudFormation, capable of addressing millions of STC's current or 
                potential users.
              </li>
            </ul>
          </div>
        </div>

        <br/>

        <div class = "experience-item">
          <div class = "title">
            <div class = "logo-container">
              <span class = "helper"/>
              <a rel = "noopener noreferrer" target = "_blank" href = "https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html"><img class = "logo" src = "img/intel-logo.png" alt = "Intel Work Experience"/></a>
            </div>
            <div class = "outer-title-container">
              <div class = "inner-title-container">
                <div class = "experience-title">Software Engineering Intern {" "}
                  <a class = "external-links" target = "_blank" rel = "noopener noreferrer" href = "https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html">
                    @ Intel Corporation
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class = "experience-timeline">
            (May 2018 - February 2019)
          </div>
          <span class = "experience-content-break"/>
          <div class = "experience-content">
            <ul class = "experience-description">
              <li>
                Developed an extensive unit-level testing framework that eliminated
                firmware scaling issues and improved widespread error detection across
                firmware for Intel Optane memory modules through development of
                extensive unit-level testing using the Unity testing framework. 
              </li>
              <li>
                Wrote hardware optimizations through close communication with
                hardware team on detailed hardware specifications. 
              </li>
            </ul>
          </div>
        </div>

        <br/>

        <div class = "experience-item">
          <div class = "title">
            <div class = "logo-container">
              <span class = "helper"/>
              <a rel = "noopener noreferrer" target = "_blank" href = "https://www.azcourts.gov/AZSupremeCourt"><img class = "logo" src = "img/az-supreme-court-logo.png" alt = "AZ Supreme Court Work Experience"/></a>
            </div>
            <div class = "outer-title-container">
              <div class = "inner-title-container">
                <div class = "experience-title">Software Development Extern {" "}
                  <a class = "external-links" target = "_blank" rel = "noopener noreferrer" href = "https://www.azcourts.gov/AZSupremeCourt">
                    @ Arizona Supreme Court
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class = "experience-timeline">
            (June 2017 - August 2017)
          </div>
          <span class = "experience-content-break"/>
          <div class = "experience-content">
            <ul class = "experience-description">
              <li>
                Created a GUI viewing tool for querying a SQL database of court cases,
                streamlining front-end interaction with digital database and formatting
                cases to different templates based on case type.
              </li>
              <li>
                Created and implemented test scripts to debug the Supreme Court Case
                Management System, providing patches and confirming system integrity
                for the v 47.0 system update.
              </li>
            </ul>
          </div>
        </div>

        <br/>

        <div class = "experience-item">
          <div class = "title">
            <div class = "logo-container">
              <span class = "helper"/>
              <a rel = "noopener noreferrer" target = "_blank" href = "https://cidse.engineering.asu.edu/teaching-research-assistantships-fellowships-awards/"><img class = "logo" src = "img/asu-logo.png" alt = "Arizona State University Work Experience"/></a>
            </div>
            <div class = "outer-title-container">
              <div class = "inner-title-container">
                <div class = "experience-title">Undergraduate Teaching Assistant {" "}
                  <a class = "external-links" target = "_blank" rel = "noopener noreferrer" href = "https://cidse.engineering.asu.edu/teaching-research-assistantships-fellowships-awards/">
                    @ Arizona State University
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class = "experience-timeline">
            (January 2017 - May 2017)
          </div>
          <span class = "experience-content-break"/>
          <div class = "experience-content">
            <ul class = "experience-description">
              <li>
                Improved student grades by an average of one letter grade relative
                to standard average through hosting crash-course review sessions for
                students outside lecture to aid in developing more intuitive
                understanding of object-oriented programming with Java.
              </li>
              <li>
                Engaged student day-to-day comprehension through administering and guiding
                students on planned weekly in-class coding exercises.
              </li>
            </ul>
          </div>
        </div>

        <div id = "signature">
          <h3>© 2019 Rohan Upponi</h3>
        </div>

        <br/>

      </div>
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
