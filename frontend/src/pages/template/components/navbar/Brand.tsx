import React from "react";
import greetUserByTimeOfDay from "../../../../helpers/greetUserByTimeOfDay";
import MediumLogo from "../medium-logo";

function Brand() {
  return (
    <>
      <MediumLogo width="180" height="34" /> {greetUserByTimeOfDay()}
    </>
  );
}

export default Brand;
