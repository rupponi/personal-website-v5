import React, { Component } from "react";
import "./introduction.css";

class Introduction extends Component {
    render() {
        return (
            <div id = "introduction">
                <h1 id = "intro-message">My name is Rohan Upponi and I'm an aspiring software engineer and computer science graduate who loves to work on new and upcoming technologies</h1>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <a class = "ref-link" rel = "noopener noreferrer" target = "_blank" href = "mailto: upponirohan@gmail.com"><div id = "mail-button" class="ref-cont"><i class="ref fa fa-envelope-o"/></div></a>
                <a class = "ref-link" rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi"><div id = "github-button" class="ref-cont"><i class="ref fa fa-github"/></div></a>
                <a class = "ref-link" rel = "noopener noreferrer" target = "_blank" href = "https://linkedin.com/in/rohanupponi"><div id = "linkedin-button" class="ref-cont"><i class = "ref fa fa-linkedin"/></div></a>
            </div>
        );
    }
}

export default Introduction;