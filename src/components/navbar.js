import React from "react"
import "./navbar.css"

const NavBar = () => {

    function navBarClick(e) {
        let title = document.getElementById("name-title");

        title.style.animation = "titleClick";
        title.style.animationDuration = "0.1s";
        title.style.animationFillMode = "forwards";
        title.style.animationTimingFunction = "linear";

        window.scrollTo(0, 0);
    }

    return (
        <div id = "navbar-container" onClick = {navBarClick}>
            <h1 id = "name-title" unselectable = "on">ROHAN UPPONI</h1>
        </div>
    );
}

export default NavBar