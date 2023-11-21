import React from "react";
import { FaDownload } from "react-icons/fa6";

const Download = () => {
  return (
    <a
      className="download"
      target="_blank"
      href="https://getstarted-wowchat.netlify.app/"
    >
      <FaDownload /> Download For Desktop
    </a>
  );
};

export default Download;
