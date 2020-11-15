import { Avatar, IconButton } from "@material-ui/core";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import React from "react";
import "./MainChat.css";

const MainChat = () => {
  return (
    <div className="chat">
      <div className="chat__header"></div>
      <div className="chat__header__contents">
        <Avatar />
        <div className="chat__header__contents__info">
          <h4> Chat Name</h4>
          <h5> timestamp</h5>
        </div>
        <IconButton>
          <MoreHoriz className="chat__header__details" />
        </IconButton>
      </div>
    </div>
  );
};

export default MainChat;
