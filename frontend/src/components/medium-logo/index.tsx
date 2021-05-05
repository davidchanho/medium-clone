import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as MediumIcon } from "../../assets/medium.svg";

function MediumLogo({ ...props }) {
  return (
    <NavLink to="/">
      <MediumIcon {...props} />
    </NavLink>
  );
}

export default MediumLogo;
