import styled from "styled-components";
import Button from ".";

const PrimaryButton = styled(Button)`
  color: ${(props) => props.theme.colors.primaryButtonText};
  background-color: ${(props) => props.theme.colors.primaryButton};
  border: 0.0625rem solid ${(props) => props.theme.colors.primaryButtonBorder};
  border-radius: 99em;
  padding: 0 16px;

  &:hover {
    border: 0.0625rem solid hsl(0, 0%, 46%);
    color: 0.0625rem solid hsl(0, 0%, 46%);
  }
`;

export default PrimaryButton;
