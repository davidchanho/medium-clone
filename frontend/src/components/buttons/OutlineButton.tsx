import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.success};
`;

function OutlineButton() {
  return <ButtonContainer>Outline</ButtonContainer>;
}

export default OutlineButton;
