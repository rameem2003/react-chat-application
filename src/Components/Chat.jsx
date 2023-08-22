import React, { useContext } from "react";
import Inpput from "./Inpput";
import { ChatContext } from "../context/ChatContext";
import Messages from "./Messages";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <header>
        <h2>{data.user?.displayName}</h2>
      </header>

      <Messages />

      <Inpput />
    </div>
  );
};

export default Chat;
