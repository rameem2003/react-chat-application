import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="messages">
      <Message text="Hi Apu ❤" owner="" />
      <Message text="Hello. Kemon Acho" owner="owner" />
    </div>
  );
};

export default Messages;
