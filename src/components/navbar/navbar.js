import React from "react";
import "./navbar.css";

var menuSelected = false;

function menuSelect() {
    let menuSymbol = document.getElementById("menu-symbol"),
    menuList = document.getElementById("menu-container"),

    aboutLink = document.getElementById("about-link"),
    resumeLink = document.getElementById("resume-link"),
    experienceLink = document.getElementById("experience-link");

    menuSymbol.classList.add("animate-symbol-click");
    menuSymbol.addEventListener('animationend', () => {
        menuSymbol.classList.remove("animate-symbol-click");
    });

    let menuLengthTarget = menuSelected ? 0 : 8,
    aboutPosTarget = menuSelected ? 0 : 5,
    experiencePosTarget = menuSelected ? 0 : 9,
    resumePosTarget = menuSelected ? 0 : 13,
    symbolAngleTarget = menuSelected ? 0 : 180;

    menuSymbol.style.webkitTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.mozTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.oTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.msTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.transform = "rotate("+symbolAngleTarget+"deg)";

    menuList.style.mozTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.oTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.msTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.transform = "scale(1, "+menuLengthTarget+")";

    aboutLink.style.webkitTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.mozTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.oTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.msTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.transform = "translate(0px, "+aboutPosTarget+"rem)";

    experienceLink.style.webkitTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.mozTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.oTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.msTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.transform = "translate(0px, "+experiencePosTarget+"rem)";

    resumeLink.style.webkitTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.mozTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.oTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.msTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.transform = "translate(0px, "+resumePosTarget+"rem)";

    menuSelected = !menuSelected;
}

function selectResume() {
    let resumeLink = document.getElementById("resume-link");

    resumeLink.classList.add("animate-menu-item-click");
    resumeLink.addEventListener('animationend', () => {
        resumeLink.classList.remove("animate-menu-item-click");
    });


    window.open("../src/assets/res/resume.pdf");

    if (menuSelected) {menuSelect();}
}

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.navBarClick = this.navBarClick.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectExperience = this.selectExperience.bind(this);
    }

    navBarClick() {
        let title = document.getElementById("name-title"),
        container = document.getElementById("navbar-container");
    
        title.classList.add("animate-title-click");
        container.classList.add("light-navbar");
    
        title.addEventListener('animationend', () => {
            title.classList.remove("animate-title-click");
            container.classList.remove("light-navbar");
            this.props.changeView('Introduction');
        });
    
        if (menuSelected) {
            menuSelect();
        }
    }

    selectAbout() {
        let aboutLink = document.getElementById("about-link");
    
    
        aboutLink.classList.add("animate-menu-item-click");
        aboutLink.addEventListener('animationend', () => {
            aboutLink.classList.remove("animate-menu-item-click");
            this.props.changeView('About');
        });
    
        if (menuSelected) {
            menuSelect();
        }
    }

    selectExperience() {
        let experienceLink = document.getElementById("experience-link");
    
        experienceLink.classList.add("animate-menu-item-click");
        experienceLink.addEventListener('animationend', () => {
            experienceLink.classList.remove("animate-menu-item-click");
            this.props.changeView('Experience');
        });
    
        if (menuSelected) {
            menuSelect();
        }
    }

    render() {
        return (
            <div id = "navbar-component">
                <div id = "navbar-container">
                    <div id = "title-panel" onClick = {this.navBarClick}>
                        <h1 id = "name-title" className = "unselectable">ROHAN UPPONI</h1>
                    </div>
                    <div id = "menu-panel" onClick = {menuSelect}>
                        <h1 id = "menu-symbol" className = "unselectable">{'\u2630'}</h1>
                    </div>
                </div>
                <div id = "menu-container"></div>
                <ul id = "menu-list">
                    <li id = "about-link" className = "list-link unselectable" onClick = {this.selectAbout}>ABOUT</li>
                    <li id = "resume-link" className = "list-link unselectable" onClick = {selectResume}>RESUME</li>
                    <li id = "experience-link" className = "list-link unselectable" onClick = {this.selectExperience}>EXPERIENCE</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;