import React, { lazy } from "react";
import Center from "../../components/center";
import PublicationHeader from "./components/publication-header";
import PublicationSection from "./components/publication-section";

const PublicationList = lazy(() => import("./components/publication-list"));

function PublicationsPage() {
  return (
    <Center>
      <PublicationSection>
        <PublicationHeader />
        <PublicationList />
      </PublicationSection>
    </Center>
  );
}

export default PublicationsPage;
