import React from "react";
import ProptTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { Icon } from 'semantic-ui-react';


export const Menu = ({ isAuthenticated, logout }) => {
  return (
    <div id="menu">
      <h1>Leafy<Icon id="leaf" name="leaf" style={{ padding: "5px" }} /></h1>
      {isAuthenticated && (
        <div id="menu-links">
          <div><NavLink to="/messages"
            activeStyle={{
              fontWeight: "bold",
            }}>Message Feed</NavLink></div>
          <div><NavLink to="/profiles/:username"
            activeStyle={{
              fontWeight: "bold",
            }}>Profile</NavLink></div>
          <div><NavLink to="/" onClick={logout}>
            Logout
          </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => { },
};

Menu.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  logout: ProptTypes.func.isRequired,
};
