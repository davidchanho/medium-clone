import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";
import Brand from "./Brand";
import Nav from "./Nav";

function Navbar() {
  return (
    <BsNavbar bg="white" expand="md" className='p-0 m-0'>
      <Brand />
      <Nav />
    </BsNavbar>
  );
}

export default Navbar;
