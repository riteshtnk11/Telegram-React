import React from "react";
import "./Sidebar.css";

import AddIcon from '@material-ui/icons/Add';
import SidebarChat from "./SidebarChat";

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
      </div>
      <div className="sidebar__footer">
         
      </div>
    </div>
  );
};

export default Sidebar;
