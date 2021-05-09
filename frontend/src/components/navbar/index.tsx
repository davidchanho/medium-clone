import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";
import Brand from "./Brand";
import Nav from "./Nav";

function Navbar() {
  return (
    <BsNavbar bg="white" expand="md">
      <Brand />
      <Nav />
    </BsNavbar>
  );
}

export default Navbar;
