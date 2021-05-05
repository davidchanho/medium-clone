import React from "react";
import { NavLink } from "react-router-dom";
import { IconMedium } from "../../../../components/icons";

function MediumLogo({ ...props }) {
  return (
    <NavLink to="/">
      <IconMedium {...props} />
    </NavLink>
  );
}

export default MediumLogo;
