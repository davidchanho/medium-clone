import React from "react";
import { Button, Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { BsBell, BsBookmarks, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { ReactComponent as MediumLogo } from "../../asset/medium.svg";
import UserNavMenu from "./UserNavMenu";

function Navbar() {
  return (
    <BsNavbar bg="light" expand="lg">
      <Container>
        <BsNavbar.Brand to="/" as={NavLink}>
          <MediumLogo /> | Good morning
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-center">
            <Nav.Link>
              <BsSearch />
            </Nav.Link>
            <Nav.Link to="/reading-list" as={NavLink}>
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
              <UserNavMenu />
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
