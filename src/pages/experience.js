import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/experience.css';

import NavBar from '../components/navbar/navbar';
import ExperienceCard from '../components/experience-card/experience-card';
import Datastore from '../data.json';


class Experience extends React.Component {
    render() {
      let experienceData = [];
      for (let x = 0; x < Datastore.experience.content.length; x++) {
          experienceData.push(
              <ExperienceCard experienceData = {Datastore.experience.content[x]}>
                  <ul class = "experience-description">
                      {
                          Datastore.experience.content[x].description.map((item, y) => <li key={y} class = "experience-list-item">{item.body}</li>)
                      }
                  </ul>
              </ExperienceCard>
          );
          experienceData.push(<br/>);
      }

      return(
        <html lang = "en">
          <Helmet>
            <title>Experience | Rohan Upponi</title>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap'/>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Karla'/>
            <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
          </Helmet>

          <div id = "navbar">
            <NavBar/>
          </div>
            <div id = "view-container">
                <div id = "experience-component">
                  <h1 id = "experience-section-title">{Datastore.experience.title}</h1>
                  <div id = "experience-partition">

                      {experienceData}

                      <div id = "signature">
                          <a id = "signature-link" rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi"><h3>© 2021 Rohan Upponi</h3></a>
                      </div>

                      <br/>
                  </div>
                </div>
            </div>
        </html>
      )
    }
  }
  
  export default Experience;