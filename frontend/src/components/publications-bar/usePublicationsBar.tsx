import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { postSelectors } from "../../store";

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

export const usePublicationsBar = () => {
  const { publications } = useSelector(postSelectors);
  const { getPublication } = useActions();

  const onGetPublication = (_id: string) => {
    getPublication(_id);
  };

  return {publications, responsive, onGetPublication}
};
