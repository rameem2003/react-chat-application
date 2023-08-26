import React, { useContext } from "react";
import Inpput from "./Inpput";
import { ChatContext } from "../context/ChatContext";
import Messages from "./Messages";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <header>
        <img src={data.user?.photoURL} alt="" />
        <h2>{data.user?.displayName}</h2>
      </header>

      <Messages />

      <Inpput />
    </div>
  );
};

export default Chat;
