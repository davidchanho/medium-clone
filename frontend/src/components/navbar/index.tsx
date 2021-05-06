import React from "react";
import styled from "styled-components";
import Row from "../row";
import Brand from "./Brand";
import Nav from "./Nav";

const Container = styled(Row)`
  margin: 20px auto;
  width: 80%;
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
