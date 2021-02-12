import React from "react";
import { Dropdown } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSelectors } from "../../store";

function UserNavMenu() {
  const { user, loading, error } = useSelector(userSelectors);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const renderToggle = () => {
    return (
      <Dropdown.Toggle className="bg-inherit text-muted shadow-none">
        {user?.avatar ? (
          <img src={user?.avatar} className="rounded" />
        ) : (
          <BiUserCircle />
        )}
      </Dropdown.Toggle>
    );
  };

  const renderHeader = () => {
    return (
      <Dropdown.Item className="d-flex align-items-center">
        <img src={user?.photo} className="rounded mr-2 py-2" />
        <div>
          <p>{user?.name}</p>
          <p>@{user?.email.split("@")[0]}</p>
        </div>
      </Dropdown.Item>
    );
  };

  return (
    <Dropdown alignRight>
      {renderToggle()}
      <Dropdown.Menu>
        {renderHeader()}
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/create">
          Write a story
        </Dropdown.Item>
        <Dropdown.Item>Stories</Dropdown.Item>
        <Dropdown.Item>Stats</Dropdown.Item>
        <Dropdown.Item>Design your profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={NavLink} to="/reading-list">
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
