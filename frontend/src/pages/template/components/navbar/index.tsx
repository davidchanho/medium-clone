import React from "react";
import styled from "styled-components";
import Brand from "./Brand";
import Nav from "./Nav";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <Container>
      <Brand />
      <Nav />
    </Container>
  );
}

export default Navbar;
