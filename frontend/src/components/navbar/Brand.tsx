import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
import { greeting } from "../../helpers/greeting";

function Brand() {
  return (
    <Navbar.Brand to="/" as={NavLink} className="font-weight-bold p-0">
      <img src="/medium.svg" alt="" /> {greeting()}
    </Navbar.Brand>
  );
}

export default Brand;
