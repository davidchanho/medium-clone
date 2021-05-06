import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MediumLogo from "../../../../components/medium-logo";
import Row from "../../../../components/row";

const Container = styled(Row)`
  padding-top: 10px;
`;

const LinkList = styled(Row)`
  flex: 0.25;
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
