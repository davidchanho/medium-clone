import React from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { publicationSelectors } from "../../store";
import { IPublication } from "../../store/publications/types";
import PublicationItem from "./PublicationItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function PublicationsBar() {
  const { publications } = useSelector(publicationSelectors);

  return (
    <Carousel ssr responsive={responsive}>
      {publications.map((publication: IPublication) => {
        return <PublicationItem {...publication} />;
      })}
    </Carousel>
  );
}

export default PublicationsBar;
