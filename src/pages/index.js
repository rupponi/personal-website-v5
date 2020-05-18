import React from 'react';
import '../styles/index.css';

import Introduction from '../components/introduction/introduction';
import About from '../components/about/about';
import Experience from '../components/experience/experience';
import NavBar from '../components/navbar/navbar';

class Index extends React.Component {
  constructor() {
    super();

    this.changeView = this.changeView.bind(this);

    this.state = {
      currentView: 'Introduction'
    };
  }

  changeView(newView) {
    this.setState({
      currentView: newView
    });
  }

  getCurrentView() {
    let currentView;
    switch(this.state.currentView) {
      case 'Introduction':
        currentView = <Introduction/>;
        break;
      case 'About':
        currentView = <About/>;
        break;
      case 'Experience':
        currentView = <Experience/>;
        break;
      default:
        break;
    }

    return currentView;
  }

  render() {
    return(
      <html lang = "en">
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap" rel="stylesheet"/>
        <meta name = "viewport" content = "width=device-width, initial-scale = 1"/>

        <div id = "navbar">
          <NavBar changeView={this.changeView}/>
        </div>
        <div id = "view-container">
          {this.getCurrentView()}
        </div>
      </html>
    )
  }
}

export default Index;