import React from "react";
import { BsBell } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Button from "../button";
import { IconBookmarks } from "../icons";
import styles from "./Nav.module.scss";
import Search from "./Search";
import UserNavMenu from "./UserNavMenu";

function Nav() {
  return (
    <div className={styles.nav}>
      <li>
        <Search />
      </li>
      <li>
        <NavLink to="/me/list/queue">
          <IconBookmarks size={25} />
        </NavLink>
      </li>
      <li>
        <BsBell size={25} />
      </li>
      <li>
        <NavLink to="/plans">
          <Button>Upgrade</Button>
        </NavLink>
      </li>
      <li>
        <UserNavMenu />
      </li>
    </div>
  );
}

export default Nav;
