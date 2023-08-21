import React, { useState } from "react";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = () => {};

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Contact"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="userChat">
        <img
          src="https://rameem2003.github.io/oursite/img/gallery/MAHMOOD%20HASSAN%20RAMEEM%201.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <h3>Rameem</h3>
          <span>Hi Apu ❤</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
