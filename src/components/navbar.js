import React from "react"
import "./navbar.css"

function navBarClick(e) {
    let title = document.getElementById("name-title");

    title.style.animation = "titleClick";
    title.style.animationDuration = "0.1s";
    title.style.animationFillMode = "forwards";
    title.style.animationTimingFunction = "linear";

    window.scrollTo(0, 0);
}

const NavBar = () => {

    return (
        <div id = "navbar-container">
            <div id = "title-panel">
                <h1 id = "name-title" onClick = {navBarClick} unselectable = "on">ROHAN UPPONI</h1>
            </div>
            <div id = "menu-panel">
                <h1>{'\u2630'}</h1>
            </div>
        </div>
    );
}

export default NavBar