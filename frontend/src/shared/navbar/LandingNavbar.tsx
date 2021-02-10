import React from "react";
import { Button, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ReactComponent as MediumLogo } from "../../asset/medium.svg";

function LandingNavbar() {
  return (
    <BsNavbar expand="lg" className="px-5 py-4 bg-yellow border-bottom">
      <BsNavbar.Brand to="/" as={NavLink} className="font-weight-bold">
        <MediumLogo />
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BsNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto my-auto">
          <Nav.Link disabled>Our Story</Nav.Link>
          <Nav.Link disabled>Membership</Nav.Link>
          <Nav.Link disabled>Write</Nav.Link>
          <Nav.Link>Sign In</Nav.Link>
          <Button as={Nav.Link}>Get Started</Button>
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default LandingNavbar;
