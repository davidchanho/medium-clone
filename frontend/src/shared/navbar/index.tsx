import React from "react";
import { Button, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { BsBell, BsBookmarks, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { ReactComponent as MediumLogo } from "../../asset/medium.svg";
import { greeting } from "../../helpers/greeting";
import UserNavMenu from "./UserNavMenu";

function Navbar() {
  return (
    <BsNavbar bg="white" expand="lg" className="px-5 py-4">
      <BsNavbar.Brand to="/" as={NavLink} className="font-weight-bold">
        <MediumLogo /> {greeting()}
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BsNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto my-auto">
          <Nav.Link>
            <BsSearch />
          </Nav.Link>
          <Nav.Link to="/reading-list" as={NavLink}>
            <BsBookmarks />
          </Nav.Link>
          <Nav.Link>
            <BsBell />
          </Nav.Link>
          <Nav.Link to="/upgrade" as={NavLink}>
            <Button variant="dark" size="sm">
              Upgrade
            </Button>
          </Nav.Link>
          <Nav.Link>
            <UserNavMenu />
          </Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
