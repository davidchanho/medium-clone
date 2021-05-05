import styled from "styled-components";

const TrendingGrid = styled.div`
  display: grid;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${(props) =>
      props.theme.breakpoints.tablet}) and (max-width: ${(props) =>
      props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export default TrendingGrid