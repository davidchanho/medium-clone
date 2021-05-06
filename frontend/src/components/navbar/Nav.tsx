import React from "react";
import { BsBell } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../buttons/PrimaryButton";
import { IconBookmarks } from "../icons";
import Row from "../row";
import Search from "./Search";
import UserNavMenu from "./UserNavMenu";

const Container = styled(Row)`
  flex: 0.2;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
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
        <NavLink to="/me/list/queue">
          <IconBookmarks size={25} />
        </NavLink>
      </li>
      <li>
        <BsBell size={25} />
      </li>
      <li>
        <NavLink to="/plans">
          <PrimaryButton>Upgrade</PrimaryButton>
        </NavLink>
      </li>
      <li>
        <UserNavMenu />
      </li>
    </Container>
  );
}

export default Nav;
