import React from "react"
import "./navbar.css"

function navBarClick(e) {
    let title = document.getElementById("name-title");
    let container = document.getElementById("navbar-container");

    title.classList.add("animate-title-click");
    container.classList.add("light-navbar");

    window.scrollTo(0, 0);

    title.addEventListener('animationend', () => {
        title.classList.remove("animate-title-click");
        container.classList.remove("light-navbar");
    });
}

function menuSelect(e) {
    let menusymbol = document.getElementById("menu-symbol");

    menusymbol.classList.add("animate-title-click");

    menusymbol.addEventListener('animationend', () => {
        menusymbol.classList.remove("animate-title-click");
    });
}

const NavBar = () => {

    return (
        <div id = "navbar-container">
            <div id = "title-panel" onClick = {navBarClick}>
                <h1 id = "name-title" unselectable = "on">ROHAN UPPONI</h1>
            </div>
            <div id = "menu-panel" onClick = {menuSelect}>
                <h1 id = "menu-symbol" unselectable = "on">{'\u2630'}</h1>
            </div>
        </div>
    );
}

export default NavBar