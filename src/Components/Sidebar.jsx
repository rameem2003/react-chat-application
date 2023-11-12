import React, { useContext } from "react";
import Navber from "./Navber";
import Search from "./Search";
import Chats from "./Chats";
import { ThemeContext } from "../context/ThemeContext";
import { ToggleChatContext } from "../context/ToggleChatContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { toggle } = useContext(ToggleChatContext);

  return (
    <div
      className={`sidebar ${theme ? "dark" : ""} ${
        toggle ? "showSidebar" : ""
      }`}
    >
      <Navber />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
