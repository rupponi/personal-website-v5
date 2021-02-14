import React from 'react';
import './experience-card.css';

class ExperienceCard extends React.Component {
    render() {
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
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ExperienceCard;