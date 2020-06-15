import React from "react";
import { MessageContainer, MenuContainer, FriendsListEnhanced } from "../components";
import './Message.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const MessageScreen = () => (
  <>
    <MenuContainer />
    <div className="messageFeed">
      <MessageContainer id="messages" />
      <FriendsListEnhanced id="friendList" />
    </div>
  </>
);