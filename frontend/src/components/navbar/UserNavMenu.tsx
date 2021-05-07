import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSelectors } from "../../store";

function UserNavMenu() {
  const { user } = useSelector(userSelectors);
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <div>
      <BiUserCircle onClick={toggleShow} size={32} />
      {show && (
        <ul>
          <li>
            <img src={user?.photo} alt="user avatar" />

            <div>
              <p>{user?.name}</p>
              <p>@{user?.email.split("@")[0]}</p>
            </div>
          </li>
          <li>
            <NavLink to="/new-story">Write a story</NavLink>
          </li>
          <li>Stories</li>
          <li>Stats</li>
          <li>Design your profile</li>
          <li>Settings</li>
          <li>Reading List</li>
          <li>Publications</li>
          <li>Control your recommendations</li>
          <li>Medium Partner Program</li>
          <li>Become a member</li>
          <li>Help</li>
          <li>Sign out</li>
          <li>Privacy Terms</li>
        </ul>
      )}
    </div>
  );
}

export default UserNavMenu;
