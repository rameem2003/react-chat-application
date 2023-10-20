import React, { useContext, useState } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa6";

// import context
import { ChatContext } from "../context/ChatContext";
import { ThemeContext } from "../context/ThemeContext";

import Inpput from "./Inpput";
import Messages from "./Messages";
import WelcomeScreen from "./WelcomeScreen";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const { theme, cngTheme } = useContext(ThemeContext);

  return (
    <div className="chat">
      <header className={`${theme ? `dark` : ""}`}>
        <div className="user_profile">
          <img src={data.user?.photoURL} alt="" />
          <h2>{data.user?.displayName}</h2>
        </div>

        <div className="themePreferance">
          <button onClick={cngTheme}>
            {theme ? <FaRegSun size={30} /> : <FaMoon size={30} />}
          </button>
        </div>
      </header>

      {/* <Messages /> */}

      {data.showWelcome ? <WelcomeScreen /> : <Messages />}

      <Inpput />
    </div>
  );
};

export default Chat;
