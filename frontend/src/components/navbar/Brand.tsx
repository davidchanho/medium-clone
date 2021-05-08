import dayjs from "dayjs";
import React from "react";
import { Navbar, NavLink } from "react-bootstrap";
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
  return (
    <Navbar.Brand
      to="/"
      as={NavLink}
      className="font-weight-bold d-flex align-items-center"
    >
      <MediumLogo width="180" height="34" className='mr-3' /> {greeting()}
    </Navbar.Brand>
  );
}

export default Brand;
