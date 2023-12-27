import React from "react";
import { FaDownload, FaWindows } from "react-icons/fa6";

const Download = () => {
  return (
    <a
      className="download"
      target="_blank"
      href="https://getstarted-wowchat.netlify.app/#download"
    >
      <FaWindows size={22} /> Download For Windows
    </a>
  );
};

export default Download;
