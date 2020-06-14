import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'
import { Card, Portal, Message } from "semantic-ui-react";

const NotFound = ({ location }) => (
  <React.Fragment >
    <Card id='NotFoundContainer'>
      <Message id='NotFoundMessage'> 
        <Message.Header>Page not found for {location.pathname}</Message.Header>
        <Link to="/"> Go Home </Link>
      </Message>
   </Card>
  </React.Fragment>
);

export const NotFoundScreen = NotFound;
