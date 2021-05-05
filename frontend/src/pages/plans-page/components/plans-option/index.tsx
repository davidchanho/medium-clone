import styled from "styled-components";

const PlansOption = styled.div`
  margin: 0 0 16px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.colors.upgradePrimary};
  border-radius: 3px;
  width: 572px;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.upgradePrimaryHover};
  }
`;

export default PlansOption;
