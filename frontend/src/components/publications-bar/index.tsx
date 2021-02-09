import React from "react";
import Carousel from "react-multi-carousel";
import PublicationList from "../publication-list";
import { usePublicationsBar } from "./usePublicationsBar";

function PublicationsBar() {
  const { responsive } = usePublicationsBar();

  return (
    <Carousel ssr responsive={responsive}>
      <PublicationList />
    </Carousel>
  );
}

export default PublicationsBar;
