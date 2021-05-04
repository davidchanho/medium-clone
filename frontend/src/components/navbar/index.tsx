import React from "react";
import Brand from "./Brand";
import Nav from "./Nav";

function Navbar() {
  return (
    <div>
      <Brand />
      <div aria-controls="basic-navbar-nav" />
      <div id="basic-navbar-nav">
        <Nav />
      </div>
    </div>
  );
}

export default Navbar;
