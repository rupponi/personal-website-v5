import React from "react";
import "../styles/experience.css";

import NavBar from "../components/navbar/navbar";
import ExperienceCard from "../components/experience-card/experience-card";

let c1ExperienceData = {
    externalLink: 'https://campus.capitalone.com/technology-program',
    logoPath: '/img/capital-one-logo.png',
    logoDescriptor: 'Capital One Work Experience',
    title: 'Software Development Engineer',
    externalLinkText: 'Capital One',
    timeline: '(February 2020 - Present)'
},
stcExperienceData = {
    externalLink: 'https://stchealth.com',
    logoPath: '/img/stc-logo.png',
    logoDescriptor: 'STC Work Experience',
    title: 'Software Development Intern',
    externalLinkText: 'Scientific Technologies Corporation',
    timeline: '(August 2018 - May 2019)'
},
intelExperienceData = {
    externalLink: 'https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html',
    logoPath: '/img/intel-logo.png',
    logoDescriptor: 'Intel Work Experience',
    title: 'Software Engineering Intern',
    externalLinkText: 'Intel Corporation',
    timeline: '(May 2018 - February 2019)'
},
ascExperienceData = {
    externalLink: 'https://www.azcourts.gov/AZSupremeCourt',
    logoPath: '/img/az-supreme-court-logo.png',
    logoDescriptor: 'Arizona Supreme Court Work Experience',
    title: 'Software Development Extern',
    externalLinkText: 'Arizona Supreme Court',
    timeline: '(June 2017 - August 2017)'
},
asuExperienceData = {
    externalLink: 'https://cidse.engineering.asu.edu/teaching-research-assistantships-fellowships-awards/',
    logoPath: 'img/asu-logo.png',
    logoDescriptor: 'Arizona State University Work Experience',
    title: 'Undergraduate Teaching Assistant',
    externalLinkText: 'Arizona State University',
    timeline: '(January 2017 - May 2017)'
}

class Experience extends React.Component {
  
    render() {
      return(
        <html lang = "en">
          <title>Rohan Upponi | Software Engineer</title>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap" rel="stylesheet"/>
          <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>
          <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
  
          <div id = "navbar">
            <NavBar/>
          </div>
          <div id = "view-container">
            <div id = "experience-component">
                    <h1 id = "experience-title">Where I've Worked</h1>
                    <div id = "experience-partition">

                        <ExperienceCard experienceData = {c1ExperienceData}>
                            <ul class = "experience-description">
                                <li class = "experience-list-item">
                                    Full stack role working with Angular platform built on Java Spring Boot and
                                    a PostgreSQL backend.
                                </li>
                                <li class = "experience-list-item">
                                    Current work focused on development of new microservice recently released on
                                    same tech stack.
                                </li>
                            </ul>
                        </ExperienceCard>

                        <br/>
                        
                        <ExperienceCard experienceData = {stcExperienceData}>
                            <ul class = "experience-description">
                                <li class = "experience-list-item">
                                    Developed API routing backend authentication and account data retrieval services
                                    for front-end web app.
                                </li>
                                <li class = "experience-list-item">
                                    Set up CDN delivery of front-end web application hosted on AWS using CloudFront.
                                </li>
                                <li class = "experience-list-item">
                                    Automated AWS infrastructure for immediate deployment and simple scaling of the backend
                                    services using CloudFormation, capable of addressing millions of STC's current or 
                                    potential users.
                                </li>
                            </ul>
                        </ExperienceCard>

                        <br/>

                        <ExperienceCard experienceData = {intelExperienceData}>
                            <ul class = "experience-description">
                                <li class = "experience-list-item">
                                    Developed an extensive unit-level testing framework that eliminated
                                    firmware scaling issues and improved widespread error detection across
                                    firmware for Intel Optane memory modules through development of
                                    extensive unit-level testing using Unity testing framework.
                                </li>
                                <li class = "experience-list-item">
                                    Wrote hardware optimizations through close communication with
                                    hardware team on detailed hardware specifications.
                                </li>
                            </ul>
                        </ExperienceCard>

                        <br/>

                        <ExperienceCard experienceData = {ascExperienceData}>
                            <ul class = "experience-description">
                                <li class = "experience-list-item">
                                    Created a GUI viewing tool for querying a SQL database of court cases,
                                    streamlining front-end interaction with digital database and formatting
                                    cases to different templates based on case type.
                                </li>
                                <li class = "experience-list-item">
                                    Created and implemented test scripts to debug the Supreme Court Case
                                    Management System, providing patches and confirming system integrity
                                    for the v 47.0 system update.
                                </li>
                            </ul>
                        </ExperienceCard>

                        <br/>

                        <ExperienceCard experienceData = {asuExperienceData}>
                            <ul class = "experience-description">
                                <li class = "experience-list-item">
                                    Improved student grades by an average of one letter grade relative
                                    to standard average through hosting crash-course review sessions for
                                    students outside lecture to aid in developing more intuitive
                                    understanding of object-oriented programming with Java.
                                </li>
                                <li class = "experience-list-item">
                                    Engaged student day-to-day comprehension through administering and guiding
                                    students on planned weekly in-class coding exercises.
                                </li>
                            </ul>
                        </ExperienceCard>

                        <div id = "signature">
                            <a id = "signature-link" rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi"><h3>© 2019 Rohan Upponi</h3></a>
                        </div>

                    </div>
                </div>
            </div>
        </html>
      )
    }
  }
  
  export default Experience;