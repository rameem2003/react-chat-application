import React from "react";

const Navber = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>WOW CHAT</h3>
      </div>
      <div className="user">
        <img
          src="https://rameem2003.github.io/oursite/img/gallery/fahmida.jpg"
          alt=""
        />
        <span>Fahmida</span>
        <button type="button">Log Out</button>
      </div>
    </div>
  );
};

export default Navber;
