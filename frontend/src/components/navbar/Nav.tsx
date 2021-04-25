import React from "react";
import { Button, Nav as BsNav, NavLink } from "react-bootstrap";
import { IconBell, IconBookmarks, IconSearch } from "../_shared/icons";
import UserNavMenu from "./UserNavMenu";

function Nav() {
  return (
    <BsNav className="ml-auto my-auto">
      <BsNav.Link>
        <IconSearch />
      </BsNav.Link>
      <BsNav.Link to="/reading-list" as={NavLink}>
        <IconBookmarks />
      </BsNav.Link>
      <BsNav.Link>
        <IconBell />
      </BsNav.Link>
      <BsNav.Link to="/upgrade" as={NavLink}>
        <Button variant="dark" size="sm">
          Upgrade
        </Button>
      </BsNav.Link>
      <BsNav.Link>
        <UserNavMenu />
      </BsNav.Link>
    </BsNav>
  );
}

export default Nav;
