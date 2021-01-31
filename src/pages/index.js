import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

import NavBar from '../components/navbar/navbar';

class Index extends React.Component {

  render() {
    return(
      <html lang = "en">
        <Helmet>
          <title>Rohan Upponi</title>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap'/>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Karla'/>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
          <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>
        </Helmet>

        <div id = "navbar">
          <NavBar/>
        </div>
        <div id = "view-container">
            <div id = "introduction-component">
              <h1 id = "intro-message">
                  My name is Rohan Upponi and I'm a new graduate fullstack software engineer <br/>
                  I love to work because I work on what I love
              </h1>

              <div id = "ref-link-container">
                  <a rel = "noopener noreferrer" target = "_blank" href = "mailto:mail@rohanupponi.com" aria-label="Email Link"><div class="ref-cont"><i class="ref fa fa-envelope-o"/></div></a>
                  <a rel = "noopener noreferrer" target = "_blank" href = "https://github.com/rupponi" aria-label="Github Link"><div class="ref-cont"><i class="ref fa fa-github"/></div></a>
                  <a rel = "noopener noreferrer" target = "_blank" href = "https://linkedin.com/in/rohanupponi" aria-label="LinkedIn Link"><div class="ref-cont"><i class = "ref fa fa-linkedin"/></div></a>
              </div>
            </div>
          </div>
      </html>
    )
  }
}

export default Index;