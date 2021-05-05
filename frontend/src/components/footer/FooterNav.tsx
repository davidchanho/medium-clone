import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MediumLogo from "../medium-logo";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkList = styled.ul`
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  opacity: 0.98;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function FooterNav() {
  return (
    <Container>
      <MediumLogo fill="white" width="145" height="29" />
      <LinkList>
        <Link to="#!">About</Link>
        <Link to="#!">Help</Link>
        <Link to="#!">Legal</Link>
      </LinkList>
    </Container>
  );
}

export default FooterNav;
