import React from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function UserNavMenu() {
  return (
    <Dropdown alignRight>
      <Dropdown.Toggle className="bg-inherit text-muted shadow-none ">
        <BiUserCircle />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Nav.Link to="/create" as={NavLink}>
            Create
          </Nav.Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserNavMenu;
