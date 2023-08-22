import React from "react";

const Message = ({ message }) => {
  console.log(message);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://rameem2003.github.io/oursite/img/gallery/MAHMOOD%20HASSAN%20RAMEEM%201.jpg"
          alt=""
        />
        <span>Now</span>
      </div>
      <div className="messageContent">
        <p>Hi</p>
      </div>
    </div>
  );
};

export default Message;
