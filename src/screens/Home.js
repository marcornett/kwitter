import React from "react";
import { LoginFormContainer, MenuContainer, ProfileContainer } from "../components";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <ProfileContainer />
  </>
);
