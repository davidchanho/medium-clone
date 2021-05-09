import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSelectors } from "../../store";
import { IconUserCircle } from "../icons";

function UserNavMenu() {
  const { user } = useSelector(userSelectors);

  return (
    <Dropdown alignRight>
      <Dropdown.Toggle className="text-muted shadow-none">
        <IconUserCircle />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className="d-flex align-items-center">
          <img
            src={user?.photo}
            alt="user avatar"
            className="rounded mr-2 py-2"
          />
          <div>
            <p>{user?.name}</p>
            <p>@{user?.email.split("@")[0]}</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/create">
          Write a story
        </Dropdown.Item>
        <Dropdown.Item>Stories</Dropdown.Item>
        <Dropdown.Item>Stats</Dropdown.Item>
        <Dropdown.Item>Design your profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          Reading List
        </Dropdown.Item>
        <Dropdown.Item>Publications</Dropdown.Item>
        <Dropdown.Item>Control your recommendations</Dropdown.Item>
        <Dropdown.Item>Medium Partner Program</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Become a member</Dropdown.Item>
        <Dropdown.Item>Help</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Privacy Terms</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserNavMenu;
