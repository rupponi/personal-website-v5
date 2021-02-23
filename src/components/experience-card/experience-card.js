import React from 'react';
import './experience-card.css';

class ExperienceCard extends React.Component {
    render() {
        let experienceListings = [];
        for (let x = 0; x < this.props.experienceData.description.length; x++) {
            experienceListings.push(<li className="experience-list-item">{this.props.experienceData.description[x].body}</li>)
        }

        return(
            <div id = "experience-item" className="unselectable">
                <div id = "title">
                    <div id = "logo-container">
                        <span id = "helper"/>
                        <a rel = "noopener noreferrer" target = "_blank" href = {this.props.experienceData.externalLink}><img id = "logo" src = {this.props.experienceData.logoPath} alt = {this.props.experienceData.logoDescriptor}/></a>
                    </div>
                    <div id = "outer-title-container">
                        <div id = "inner-title-container">
                            <div id = "experience-title">
                                {this.props.experienceData.title} {" "}
                                <a id = "external-links" target = "_blank" rel = "noopener noreferrer" href = {this.props.experienceData.externalLink}>
                                    @ {this.props.experienceData.externalLinkText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id = "experience-timeline">
                    {this.props.experienceData.timeline}
                </div>
                <span id = "experience-content-break"/>
                <div id = "experience-content">
                    <ul className="experience-description">
                        {experienceListings}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ExperienceCard;