import React from "react";

const Message = (props) => {
  return (
    <div className={` message ${props.owner}`}>
      <div className="messageInfo">
        <img
          src="https://rameem2003.github.io/oursite/img/gallery/MAHMOOD%20HASSAN%20RAMEEM%201.jpg"
          alt=""
        />
        <span>Now</span>
      </div>
      <div className="messageContent">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Message;
