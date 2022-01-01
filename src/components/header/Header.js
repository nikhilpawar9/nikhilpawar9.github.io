import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <a href="">
          <i>&lt; / &gt;</i>
          Nikhil Pawar
        </a>
      </div>

      <div className="headerItems">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
