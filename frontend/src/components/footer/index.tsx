import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Navbar
      bg="dark"
      className="w-100 d-flex align-items-center justify-content-between"
    >
      <Navbar.Brand href="/">
        <img src="../../assets/medium.svg" />
      </Navbar.Brand>
      <Nav className="w-25 d-flex align-items-center justify-content-between">
        <NavLink to="#!" className="text-white">
          About
        </NavLink>
        <NavLink to="#!" className="text-white">
          Help
        </NavLink>
        <NavLink to="#!" className="text-white">
          Legal
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default Footer;
