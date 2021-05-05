import React from "react";
import { BsBell } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IconBookmarks } from "../../../../components/icons";
import Search from "./Search";
import UserNavMenu from "./UserNavMenu";

const Container = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Nav() {
  return (
    <Container>
      <li>
        <Search />
      </li>
      <li>
        <NavLink to="/reading-list">
          <IconBookmarks />
        </NavLink>
      </li>
      <li>
        <BsBell />
      </li>
      <li>
        <NavLink to="/plans">
          <button>Upgrade</button>
        </NavLink>
      </li>
      <li>
        <UserNavMenu />
      </li>
    </Container>
  );
}

export default Nav;
