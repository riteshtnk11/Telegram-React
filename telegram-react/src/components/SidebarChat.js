import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebarThread">
      <Avatar />
      <div  className="sidebarThread__details"> 
        <h3> Chat Profile </h3>
        <p>This is the message</p>
        <small className="sidebarThread__timestamp"> timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
