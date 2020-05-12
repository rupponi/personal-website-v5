import React from 'react';
import '../introduction/introduction.css';

class Introduction extends React.Component {
    render() {
        return(
            <div id = "introduction-component">
                <h1 id = "intro-message">
                    My name is Rohan Upponi and I'm a new graduate fullstack software engineer <br/>
                    I love to work because I work on what I love
                </h1>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div id = "ref-link-container">
                    <a rel = "noopener noreferrer" target = "_blank" href = "mailto:mail@rohanupponi.com"><div class="ref-cont"><i class="ref fa fa-envelope-o"/></div></a>
                    <a rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi"><div class="ref-cont"><i class="ref fa fa-github"/></div></a>
                    <a rel = "noopener noreferrer" target = "_blank" href = "https://linkedin.com/in/rohanupponi"><div class="ref-cont"><i class = "ref fa fa-linkedin"/></div></a>
                </div>
            </div>
        )
    }
}

export default Introduction;