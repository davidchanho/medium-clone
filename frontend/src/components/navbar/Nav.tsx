import React from "react";
import { BsBell } from "react-icons/bs";
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
        <IconBookmarks size={25} />
      </li>
      <li>
        <BsBell size={25} />
      </li>
      <li>
        <Button>Upgrade</Button>
      </li>
      <li>
        <UserNavMenu />
      </li>
    </div>
  );
}

export default Nav;
