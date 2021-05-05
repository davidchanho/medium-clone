import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useSelector } from "../../hooks/useSelector";
import { publicationSelectors } from "../../store";
import { IPublication } from "../../types";
import Navbar from "../template/components/navbar";
import PublicationContainer from "./components/publication-container";
import PublicationItem from "./components/publication-item";

const PublicationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PublicationSection = styled.section`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const PublicationList = styled.ul``;

const PublicationTitle = styled.h1`
  font-size: 46px;
`;

const PublicationSubtitle = styled.h2`
  font-size: 18px;
`;

function PublicationsPage() {
  const { publications } = useSelector(publicationSelectors);

  return (
    <>
      <Navbar />

      <PublicationContainer>
        <PublicationSection>
          <PublicationHeader>
            <PublicationTitle>Publications</PublicationTitle>
            <PrimaryButton>New publication</PrimaryButton>
          </PublicationHeader>
          <PublicationSubtitle>Suggested</PublicationSubtitle>
          <hr />
          <PublicationList>
            {publications.map((publication: IPublication) => (
              <PublicationItem {...publication} />
            ))}
          </PublicationList>
        </PublicationSection>
      </PublicationContainer>
    </>
  );
}

export default PublicationsPage;
