import React from "react";
import Messages from "./messages";
import Inpput from "./Inpput";

const Chat = () => {
  return (
    <div className="chat">
      <header>
        <h2>Rameem</h2>
      </header>

      <Messages />

      <Inpput />
    </div>
  );
};

export default Chat;
