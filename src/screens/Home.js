import React from "react";
import { LoginFormContainer, HomeBanner } from "../components";
import './Home.css'

export const HomeScreen = () => (
  <div className="home">
    <HomeBanner />
    <LoginFormContainer />
  </div>
);
