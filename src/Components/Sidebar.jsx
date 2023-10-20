import React, { useContext } from "react";
import Navber from "./Navber";
import Search from "./Search";
import Chats from "./Chats";
import { ThemeContext } from "../context/ThemeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`sidebar ${theme ? "dark" : ""}`}>
      <Navber />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
