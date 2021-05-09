import React from "react";
import { Button, Nav as BsNav } from "react-bootstrap";
import { IconBell, IconBookmarks, IconSearch } from "../icons";
import UserNavMenu from "./UserNavMenu";

function Nav() {
  return (
    <BsNav className="ml-auto my-auto d-flex align-items-center flex-row">
      <BsNav.Link>
        <IconSearch />
      </BsNav.Link>

      <BsNav.Link className="hide-mobile">
        <IconBookmarks />
      </BsNav.Link>

      <BsNav.Link>
        <IconBell />
      </BsNav.Link>

      <BsNav.Link className="hide-mobile">
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
