import React from "react"
import "./navbar.css"

const NavBar = () => {
    return (
        <div id = "navbar-container">
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
            
            <link href = "https://fonts.googleapis.com/css?family=Karla" rel = "stylesheet"></link>
            <h1 id = "name-title">ROHAN UPPONI</h1>
        </div>
    );
}

export default NavBar