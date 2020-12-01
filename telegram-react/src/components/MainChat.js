import { Avatar, IconButton } from "@material-ui/core";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import React, { useState } from "react";
import "./MainChat.css";

const MainChat = () => {
  //Declare main state for input field
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    //prevents the default action of submit button.
    e.preventDefault();
    //Clears the input field after message is submitted.
    setInput('');
  }

  console.log(input);

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
      <div className="chat__messages">
        <div className="chat__input">
          <input placeholder="write a message..." type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button onClick={ sendMessage }>Send Message</button>
        </div>

      </div>
    </div>
  );
};

export default MainChat;
