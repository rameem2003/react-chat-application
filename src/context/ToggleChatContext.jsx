import React, { createContext, useState } from "react";

export const ToggleChatContext = createContext();

export const ToggleChatContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handlToggle = () => {
    setToggle(!toggle);
  };

  return (
    <ToggleChatContext.Provider value={{ toggle, handlToggle }}>
      {children}
    </ToggleChatContext.Provider>
  );
};
