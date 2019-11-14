import React from "react"
import "./card.css"

const Card = ({ children }) => {
    return (
        <div id = "card-component">
            { children }
        </div>
    );
}

export default Card;