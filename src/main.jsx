import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { ToggleChatContextProvider } from "./context/ToggleChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <ThemeContextProvider>
        <ToggleChatContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ToggleChatContextProvider>
      </ThemeContextProvider>
    </ChatContextProvider>
  </AuthContextProvider>
);
