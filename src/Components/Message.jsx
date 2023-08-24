import React, { useContext, useEffect } from "react";
import { AuthContext } from "./../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useRef } from "react";

const Message = ({ message }) => {
  // console.log(message);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

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
        <span>Now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
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
