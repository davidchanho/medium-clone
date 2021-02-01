import React from "react";
import { Nav, Navbar as BsNavbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <BsNavbar bg="light" expand="lg">
      <BsNavbar.Brand to="/" as={NavLink}>
        MEDIUM
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BsNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/" as={NavLink}>
            Posts
          </Nav.Link>
          <Nav.Link to="/create" as={NavLink}>
            Create
          </Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;