import React from "react";
import { NavLink } from "react-router-dom";
import { IconBell, IconBookmarks, IconSearch } from "../icons";
import UserNavMenu from "./UserNavMenu";

function Nav() {
  return (
    <ul className="ml-auto my-auto">
      <li>
        <IconSearch />
      </li>
      <li>
        <NavLink to="/reading-list">
          <IconBookmarks />
        </NavLink>
      </li>
      <li>
        <IconBell />
      </li>
      <li>
        <NavLink to="/upgrade">
          <button>Upgrade</button>
        </NavLink>
      </li>
      <li>
        <UserNavMenu />
      </li>
    </ul>
  );
}

export default Nav;
