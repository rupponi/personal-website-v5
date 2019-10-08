import React from "react"
import "./navbar.css"

function navBarClick(e) {
    let title = document.getElementById("name-title");

    title.classList.add("animate-title-click");

    window.scrollTo(0, 0);

    title.addEventListener('animationend', () => {
        title.classList.remove("animate-title-click");
    });
}

const NavBar = () => {

    return (
        <div id = "navbar-container">
            <div id = "title-panel" onClick = {navBarClick}>
                <h1 id = "name-title" unselectable = "on">ROHAN UPPONI</h1>
            </div>
            <div id = "menu-panel">
                <h1 id = "menu-symbol" style= {{margin: 0 + 'em'}}>{'\u2630'}</h1>
            </div>
        </div>
    );
}

export default NavBar