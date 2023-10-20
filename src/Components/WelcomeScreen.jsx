import React, { useContext } from "react";
import banner from "../assets/wow-chat-welcome-screen.png";
import { ThemeContext } from "../context/ThemeContext";

const WelcomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`welcomeScreen ${theme ? "dark" : ""}`}>
      <img src={banner} alt="" />
    </div>
  );
};

export default WelcomeScreen;
