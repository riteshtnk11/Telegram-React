import React from "react";
import Sidebar from "./Sidebar";
import MainChat from "./MainChat";

import "./Telegram.css";

const Telegram = () => {
  return (
    <div className="telegram">
      <Sidebar />
      <MainChat />
    </div>
  );
};

export default Telegram;
