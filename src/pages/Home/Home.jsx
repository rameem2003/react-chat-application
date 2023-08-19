import React from "react";
import "./home.css";
import Sidebar from "../../Components/Sidebar";
import Chat from "../../Components/chat";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
