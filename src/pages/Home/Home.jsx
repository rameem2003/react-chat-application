import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import Sidebar from "../../Components/Sidebar";
// import Chat from "../../Components/chat";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import Chat from "./../../Components/Chat";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    toast.success(
      <h4 style={{ textTransform: "capitalize" }}>
        Welcome {currentUser.displayName}
      </h4>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: `${theme ? "colored" : "light"}`,
      }
    );
  }, [currentUser]);

  return (
    <div className={`wrapper ${theme ? "dark" : ""}`}>
      <div className="home">
        <Sidebar />
        <Chat />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Home;
