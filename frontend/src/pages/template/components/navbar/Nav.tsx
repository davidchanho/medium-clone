import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  IconBell,
  IconBookmarks,
  IconSearch,
} from "../../../../components/icons";
import UserNavMenu from "./UserNavMenu";

const Container = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

function Nav() {
  return (
    <Container>
      <ul>
        <li>
          <IconSearch />
        </li>
        <li>
          <NavLink to="/reading-list">
            <IconBookmarks />
          </NavLink>
        </li>
        <li>
          <IconBell />
        </li>
        <li>
          <NavLink to="/upgrade">
            <button>Upgrade</button>
          </NavLink>
        </li>
        <li>
          <UserNavMenu />
        </li>
      </ul>
    </Container>
  );
}

export default Nav;
