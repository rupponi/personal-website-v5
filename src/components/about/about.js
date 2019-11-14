import React from "react";
import "./about.css";

const About = ({ data }) => {
    return (
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
    );
}

export default About;