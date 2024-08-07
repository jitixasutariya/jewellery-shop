import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./SocialMediaIcon.css";

const SocialMediaIcon = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcon;
