// src/Components/NavBar/NavBar.js
import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="leftNavbar">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="rightNavbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
