import React from "react";
import "./Header.css";
import logo from "../logo/logo.png";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/home">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
