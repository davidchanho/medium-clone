import React from "react";
import MediumLogo from "../medium-logo";

const greeting = () => {
  const currentTime = new Date().getHours();
  return currentTime > 0 && currentTime < 12
    ? "Good morning"
    : currentTime > 12 && currentTime < 18
    ? "Good afternoon"
    : "Good evening";
};

function Brand() {
  return (
    <>
      <MediumLogo width="180" height="34" /> {greeting()}
    </>
  );
}

export default Brand;
