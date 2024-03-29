import React, { useContext } from "react";
import icon from "../assets/wow-cha-logo-icon.png";

// Firebase Auth
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// import context
import { AuthContext } from "../context/AuthContext";

const Navber = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="logo">
        {/* <h3>
          WOW CHAT{" "}
          <sup style={{ marginLeft: "10px" }}>
            <h4>INSIDER</h4>
          </sup>
        </h3> */}

        <img src={icon} alt="" />
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
