import dayjs from "dayjs";
import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import { ReactComponent as MediumLogo } from "../../assets/medium.svg";

const greeting = () => {
  const currentTime = dayjs().hour();
  return currentTime > 0 && currentTime < 12
    ? "Good morning"
    : currentTime > 12 && currentTime < 18
    ? "Good afternoon"
    : "Good evening";
};

function Brand() {
  const pathname = useLocation().pathname;

  return (
    <Navbar.Brand
      to="/"
      as={NavLink}
      className="font-weight-bold d-flex align-items-center"
    >
      <MediumLogo width="180" height="34" className="mr-3" />{" "}
      {pathname === "/" && greeting()}
    </Navbar.Brand>
  );
}

export default Brand;
