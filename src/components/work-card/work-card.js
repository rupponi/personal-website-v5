import React from 'react';
import './work-card.css';

class WorkCard extends React.Component {
  render() {
    return(
      <div id = "work-item" className = "unselectable">
        <h1>{this.props.workData.title}</h1>
        <h3 style={{textAlign: "center"}}>{this.props.workData.description}</h3>
      </div>
    );
  }
}

export default WorkCard;