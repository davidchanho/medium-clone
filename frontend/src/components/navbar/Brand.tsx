import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import MediumLogo from "../medium-logo";
import Row from "../row";
import greetUserByTimeOfDay from "./greetUserByTimeOfDay";

const Container = styled(Row)`
  flex: 0.3;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.darkText};
`;

function Brand() {
  const location = useLocation();

  return (
    <Container>
      <MediumLogo width="180" height="34" />{" "}
      {location.pathname === "/" && greetUserByTimeOfDay()}
    </Container>
  );
}

export default Brand;
