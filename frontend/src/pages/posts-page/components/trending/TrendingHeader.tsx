import React from "react";
import styled from "styled-components";
import { ReactComponent as TrendingIcon } from "./trending.svg";

export const Header = styled.header`
  display: flex;
`;

export const Title = styled.p``;

function TrendingHeader() {
  return (
    <Header>
      <TrendingIcon />
      <Title>TRENDING ON MEDIUM</Title>
    </Header>
  );
}

export default TrendingHeader;
