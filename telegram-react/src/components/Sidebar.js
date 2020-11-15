import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <input placeholder="search" className="sidebar__input"></input>
        </div>
        <AddIcon onClick="submit" />
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

      </div>
      <div className="sidebar__footer">
      <Avatar />
        <IconButton >
          <PhoneOutlinedIcon />
        </IconButton>
        <IconButton >
          <QuestionAnswerOutlinedIcon />
        </IconButton>
        <IconButton >
          <SettingsOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
