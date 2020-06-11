import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = ({ location }) => (
  <React.Fragment >
    <div id='NotFoundContainer'>
      <div id='NotFoundMessage'> 
        <p>Page not found for {location.pathname}</p>
        <Link to="/">Go Home</Link>
      </div>
   </div>
  </React.Fragment>
);

export const NotFoundScreen = NotFound;
