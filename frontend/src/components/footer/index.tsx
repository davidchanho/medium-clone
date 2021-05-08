import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ReactComponent as MediumLogo } from "../../assets/medium.svg";

function Footer() {
  return (
    <Navbar
      bg="dark"
      className="w-100 d-flex align-items-center justify-content-between"
    >
      <Navbar.Brand href="/">
        <MediumLogo fill="white" width="123" height="26" />
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
