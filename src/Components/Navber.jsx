import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navber = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="logo">
        <h3>
          WOW CHAT{" "}
          <sup style={{ marginLeft: "10px" }}>
            <h4>v0.2 BETA</h4>
          </sup>
        </h3>
      </div>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button type="button" onClick={() => signOut(auth)}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navber;
