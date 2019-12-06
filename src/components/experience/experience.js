import React, { Component } from "react";
import "./experience.css";
import ExperienceCard from "../experience-card/experience-card";

let stcExperienceData = {
    externalLink: 'https://stchealth.com',
    logoPath: 'img/stc-logo.png',
    logoDescriptor: 'STC Work Experience',
    title: 'Software Development Intern',
    externalLinkText: 'Scientific Technologies Corporation',
    timeline: '(August 2018 - May 2019)'
},
intelExperienceData = {
    externalLink: 'https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html',
    logoPath: 'img/intel-logo.png',
    logoDescriptor: 'Intel Work Experience',
    title: 'Software Engineering Intern',
    externalLinkText: 'Intel Corporation',
    timeline: '(May 2018 - February 2019)'
},
ascExperienceData = {
    externalLink: 'https://www.azcourts.gov/AZSupremeCourt',
    logoPath: 'img/az-supreme-court-logo.png',
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

class Experience extends Component {
    render() {
        return (
            <div id = "experience">
                <h1 class = "section-title">Where I've Worked</h1>
                <div id = "experience-partition">
                    
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
        );
    }
}

export default Experience;

