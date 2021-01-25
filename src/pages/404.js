import React from 'react'
import { Helmet } from 'react-helmet';
import '../styles/404.css';

const NotFoundPage = () => {
  return (
    <div id="error-message-container">
      <Helmet>
        <title>404 Not Found | Rohan Upponi</title>
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap" rel="stylesheet"/>
      </Helmet>
      <h1 id = "error-404">404</h1>
      <h3 id = "page-not-found">Page Not Found</h3>

      <div id = "home-button">
        <a id = "home-link" rel = "noopener noreferrer" href = "https://rohanupponi.com"><h3 id = "return-home-message">Home</h3></a>
      </div>
    </div>
  );
}
export default NotFoundPage
