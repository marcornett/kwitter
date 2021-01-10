import React from "react";
import { MessageContainer, MenuContainer, FriendsListEnhanced } from "../components";
import './Message.css'

export const MessageScreen = () => (
  <>
    <MenuContainer />
    <div className="messageFeed">
      <MessageContainer id="messages" />
      <FriendsListEnhanced id="friendList" />
    </div>
  </>
);