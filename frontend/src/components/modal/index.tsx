import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;
`;

export default Modal;
