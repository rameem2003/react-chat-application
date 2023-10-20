import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";

// Firebase Auth
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
// import context
import { ChatContext } from "../context/ChatContext";
import { ThemeContext } from "../context/ThemeContext";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
      // console.log(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  // console.log(messages);
  return (
    <div className={`messages ${theme ? "dark" : ""}`}>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}

      {/* <Message /> */}
    </div>
  );
};

export default Messages;
