import React from "react";
import Navber from "./Navber";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navber />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
