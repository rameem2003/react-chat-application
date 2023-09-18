import React, { useContext } from "react";

// import context
import { ChatContext } from "../context/ChatContext";

import Inpput from "./Inpput";
import Messages from "./Messages";
import WelcomeScreen from "./WelcomeScreen";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <header>
        <img src={data.user?.photoURL} alt="" />
        <h2>{data.user?.displayName}</h2>
      </header>

      {/* <Messages /> */}

      {data.showWelcome ? <WelcomeScreen /> : <Messages />}

      <Inpput />
    </div>
  );
};

export default Chat;
