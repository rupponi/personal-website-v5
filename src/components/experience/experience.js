import React from "react";
import "./experience.css";

const Experience = () => {
    return (
        <div id = "experience">
            <h1 class = "section-title">Where I've Worked</h1>
            <div id = "experience-partition">
                
                <div class = "experience-item">
                    <div class = "title">
                        <div class = "logo-container">
                            <span class = "helper"/>
                            <a rel = "noopener noreferrer" target = "_blank" href = "https://stchealth.com"><img class = "logo" src = "img/stc-logo.png" alt = "STC Work Experience"/></a>
                        </div>
                        <div class = "outer-title-container">
                            <div class = "inner-title-container">
                                <div class = "experience-title">
                                    Software Development Intern {" "}
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
                                <div class = "experience-title">
                                    Software Engineering Intern {" "}
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
                                <div class = "experience-title">
                                    Software Development Extern {" "}
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
                                <div class = "experience-title">
                                    Undergraduate Teaching Assistant {" "}
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
                            <li class = "experience-list-item">
                                Improved student grades by an average of one letter grade relative
                                to standard average through hosting crash-course review sessions for
                                students outside lecture to aid in developing more intuitive
                                understanding of object-oriented programming with Java.
                            </li>
                            <li calss = "experience-list-item">
                                Engaged student day-to-day comprehension through administering and guiding
                                students on planned weekly in-class coding exercises.
                            </li>
                        </ul>
                    </div>
                </div>

                <div id = "signature">
                <a id = "signature-link" rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi"><h3>© 2019 Rohan Upponi</h3></a>
                </div>

            </div>
        </div>
    );
}

export default Experience;

