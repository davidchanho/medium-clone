import React from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSelectors } from "../../store";

function UserNavMenu() {
  const {user} = useSelector(userSelectors)

  return (
    <Dropdown alignRight>
      <Dropdown.Toggle className="bg-inherit text-muted shadow-none ">
        {user?.avatar ? <img src={user.avatar} /> : <BiUserCircle />}
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
