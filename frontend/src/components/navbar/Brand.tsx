import dayjs from "dayjs";
import React from "react";
import { Navbar, NavLink } from "react-bootstrap";

function Brand() {
  const greeting = () => {
    const currentTime = dayjs().hour();
    return currentTime > 0 && currentTime < 12
      ? "Good morning"
      : currentTime > 12 && currentTime < 18
      ? "Good afternoon"
      : "Good evening";
  };

  return (
    <Navbar.Brand to="/" as={NavLink} className="font-weight-bold">
      <img src="/medium.svg" alt="" width="180" height="34" /> {greeting()}
    </Navbar.Brand>
  );
}

export default Brand;
