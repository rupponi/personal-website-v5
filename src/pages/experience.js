import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/experience.css';

import NavBar from '../components/navbar/navbar';
import ExperienceCard from '../components/experience-card/experience-card';
import JSONData from '../data.json';


class Experience extends React.Component {
    render() {
      return(
        <html lang = "en">
        <Helmet>
          <title>Experience | Rohan Upponi</title>
          <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap" rel="stylesheet"/>
          <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>
          <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
        </Helmet>

          <div id = "navbar">
            <NavBar/>
          </div>
          <div id = "view-container">
            <div id = "experience-component">
                    <h1 id = "experience-title">Where I've Worked</h1>
                    <div id = "experience-partition">

                        <ExperienceCard experienceData = {JSONData.content[0]}>
                            <ul class = "experience-description">
                                {
                                    JSONData.content[0].description.map((item, y) => <li key={y} class = "experience-list-item">{item.body}</li>)
                                }
                            </ul>
                        </ExperienceCard>

                        <br/>

                        <ExperienceCard experienceData = {JSONData.content[1]}>
                            <ul class = "experience-description">
                                {
                                    JSONData.content[1].description.map((item, y) => <li key={y} class = "experience-list-item">{item.body}</li>)
                                }
                            </ul>
                        </ExperienceCard>

                        <br/>

                        <ExperienceCard experienceData = {JSONData.content[2]}>
                            <ul class = "experience-description">
                                {
                                    JSONData.content[2].description.map((item, y) => <li key={y} class = "experience-list-item">{item.body}</li>)
                                }
                            </ul>
                        </ExperienceCard>

                        <br/>

                        <ExperienceCard experienceData = {JSONData.content[3]}>
                            <ul class = "experience-description">
                                {
                                    JSONData.content[3].description.map((item, y) => <li key={y} class = "experience-list-item">{item.body}</li>)
                                }
                            </ul>
                        </ExperienceCard>

                        <br/>

                        <ExperienceCard experienceData = {JSONData.content[4]}>
                            <ul class = "experience-description">
                                {
                                    JSONData.content[4].description.map((item, y) => <li key={y} class = "experience-list-item">{item.body}</li>)
                                }
                            </ul>
                        </ExperienceCard>

                        <div id = "signature">
                            <a id = "signature-link" rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi"><h3>© 2019 Rohan Upponi</h3></a>
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