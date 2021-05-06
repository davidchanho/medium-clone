import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import Row from "../../../../components/row";

const PublicationTitle = styled.h1`
  font-size: 46px;
`;

const PublicationSubtitle = styled.h2`
  font-size: 18px;
`;

function PublicationHeader() {
  return (
    <>
      <Row>
        <PublicationTitle>Publications</PublicationTitle>
        <PrimaryButton>New publication</PrimaryButton>
      </Row>
      <PublicationSubtitle>Suggested</PublicationSubtitle>
      <hr />
    </>
  );
}

export default PublicationHeader;
