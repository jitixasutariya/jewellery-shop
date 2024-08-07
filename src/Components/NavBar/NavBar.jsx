import React from "react";
import SocialMediaIcon from "./SocialMediaIcon/SocialMediaIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/gallery"
                activeClassName="active"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto social-media">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/signup"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faUserPlus} /> Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <SocialMediaIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
