import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IconUserCircle } from "../../../../components/icons";
import { userSelectors } from "../../../../store";

function UserNavMenu() {
  const { user } = useSelector(userSelectors);

  return (
    <div>
      <div>
        <IconUserCircle />
      </div>
      <ul>
        <li>
          <img src={user?.photo} alt="user avatar" />
          <div>
            <p>{user?.name}</p>
            <p>@{user?.email.split("@")[0]}</p>
          </div>
        </li>
        <div />
        <li>
          <NavLink to="/create">Write a story</NavLink>
        </li>
        <li>Stories</li>
        <li>Stats</li>
        <li>Design your profile</li>
        <li>Settings</li>
        <div />
        <li>
          <NavLink to="/reading-list">Reading List</NavLink>
        </li>
        <li>Publications</li>
        <li>Control your recommendations</li>
        <li>Medium Partner Program</li>
        <div />
        <li>Become a member</li>
        <li>Help</li>
        <li>Sign out</li>
        <div />
        <li>Privacy Terms</li>
      </ul>
    </div>
  );
}

export default UserNavMenu;
