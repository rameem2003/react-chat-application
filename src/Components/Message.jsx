import React, { useContext, useEffect } from "react";
// import context
import { AuthContext } from "./../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

import { useRef } from "react";

// import sound
import sound from "../assets/sound.mp3";

const Message = ({ message }) => {
  console.log(message);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // useEffect(() => {
  //   new Audio(sound).play();
  // });

  const showTime = (ns, s) => {
    //date from firebase is represented as
    let time = {
      seconds: s,
      nanoseconds: ns,
    };

    const fireBaseTime = new Date(
      time.seconds * 1000 + time.nanoseconds / 1000000
    );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();

    console.log(date, atTime);
    return (
      <>
        {date}, {atTime}
      </>
    );
  };

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className="messageContent">
        <div>
          <p>{message.text}</p>
          <span className="msgTime">
            {showTime(message.date.nanoseconds, message.date.seconds)}
          </span>
        </div>
        {message.img && (
          <a target="_blank" href={message.img}>
            <span className="tooltip">Download</span>
            <img src={message.img} alt="" />
          </a>
        )}
      </div>
    </div>

    // <div className={`message owner`}>
    //   <div className="messageInfo">
    //     <img
    //       src="https://www.facebook.com/photo/?fbid=1007948080378799&set=a.107909707049312"
    //       alt=""
    //     />
    //     <span>Now</span>
    //   </div>
    //   <div className="messageContent">
    //     <p>Hi</p>
    //   </div>
    // </div>
  );
};

export default Message;
