import dayjs from "dayjs";
import React from "react";
import { NavLink } from "react-router-dom";

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
    <NavLink to="/">
      <img src="/medium.svg" alt="" width="180" height="34" /> {greeting()}
    </NavLink>
  );
}

export default Brand;
