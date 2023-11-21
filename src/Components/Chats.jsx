import React, { useContext, useEffect, useState } from "react";

import beepSound from "../assets/sound.mp3";

// import context
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

// Firebase Auth
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { ThemeContext } from "../context/ThemeContext";
import { ToggleChatContext } from "../context/ToggleChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [open, isOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const { theme } = useContext(ThemeContext);
  const { handlToggle } = useContext(ToggleChatContext);

  // const beep = () => {
  //   new Audio(beepSound).play();
  // };

  // const beepOff = () => {
  //   new Audio(beepSound).pause();
  // };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        // console.log("Current data: ", doc.data());
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // console.log(Object.entries(chats));

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const handleOpen = () => {
    isOpen(false);

    isOpen(true);
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className={`userChat ${theme ? "dark" : ""}`}
            key={chat[0]}
            onClick={() => {
              handleSelect(chat[1].userInfo);
              handlToggle();
              // handleOpen();
            }}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <h3>{chat[1].userInfo.displayName}</h3>
              <span>
                {chat[1].lastMessage?.text.substring(0, 30)}{" "}
                {chat[1].lastMessage?.text.length >= 30 ? "..........." : ""}
                {/* {chat[1].lastMessage?.text ? beep() : beepOff()} */}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
