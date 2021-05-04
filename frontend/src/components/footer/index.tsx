import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <a href="/">
        <img src="../../assets/medium.svg" alt="logo" />
      </a>
      <nav>
        <NavLink to="#!">About</NavLink>
        <NavLink to="#!">Help</NavLink>
        <NavLink to="#!">Legal</NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
