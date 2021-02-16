import React from 'react';
import './work-card.css';

class WorkCard extends React.Component {
  render() {
    let skills = [];
    for (let x = 0; x < this.props.workData.skills.length; x++) {
      skills.push(<h4 id = "skill">{this.props.workData.skills[x]}</h4>);
    }

    return(
      <div id = "work-item" className = "unselectable" onClick={() => {window.open(this.props.workData.externalLink, "_blank")}} onKeyPress={() => {window.open(this.props.workData.externalLink, "_blank")}} tabIndex="0" role="button">
        <div id = "work-item-text">
          <h2 style={{fontWeight: "bolder"}}>{this.props.workData.title}</h2>
          <h5 style={{textAlign: "center"}}>{this.props.workData.description}</h5>
        </div>
        <div id = "work-item-skills">
          {skills}
        </div>
      </div>
    );
  }
}

export default WorkCard;