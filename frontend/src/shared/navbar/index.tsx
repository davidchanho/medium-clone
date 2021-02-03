import React from "react";
import { Button, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { BsBell, BsBookmarks, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <BsNavbar bg="light" expand="lg">
      <BsNavbar.Brand to="/" as={NavLink}>
        MEDIUM | Good morning
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BsNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link to="/create" as={NavLink}>
            Create
          </Nav.Link>
          <Nav.Link>
            <BsSearch />
          </Nav.Link>
          <Nav.Link>
            <BsBookmarks />
          </Nav.Link>
          <Nav.Link>
            <BsBell />
          </Nav.Link>
          <Nav.Link>
            <Button disabled variant="outline-dark">
              Upgrade
            </Button>
          </Nav.Link>
          <Nav.Link>
            <BiUserCircle />
          </Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
