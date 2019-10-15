import React from "react"
import "../components/experience-item.css"

const ExperienceItem = ({ children }) => {
    return (
        <div id = "experience-item-component">
            {children}
        </div>
    )
}

export default ExperienceItem;