import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/work.css';

import NavBar from '../components/navbar/navbar';
import WorkCard from '../components/work-card/work-card';

class Work extends React.Component {
  render() {
    let content = [];
    for (let x = 0; x < 6; x++) {
      content.push(
        <div className="grid-item">
          <WorkCard/>
        </div>
      );
    }

    return(
      <html lang="en">
          <Helmet>
            <title>Work | Rohan Upponi</title>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap'/>
            <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
          </Helmet>

          <div id = "navbar">
            <NavBar/>
          </div>
          <div id = "view-container">
            <h1 id = "work-section-title">Work</h1>
            <div id = "work-partition">
                {content}
            </div>
          </div>
      </html>
    )
  }
}

export default Work;