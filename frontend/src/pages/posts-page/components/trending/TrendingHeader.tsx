import React from "react";
import styled from "styled-components";
import { ReactComponent as TrendingIcon } from "../../../../assets/trending.svg";

export const Header = styled.header`
  display: flex;
`;

export const Icon = styled(TrendingIcon)``;

export const Title = styled.p``;

function TrendingHeader() {
  return (
    <Header>
      <Icon />
      <Title>TRENDING ON MEDIUM</Title>
    </Header>
  );
}

export default TrendingHeader;
