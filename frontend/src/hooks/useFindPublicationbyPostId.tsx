import { postSelectors, publicationSelectors } from "../store";
import { useSelector } from "./useSelector";

export const useFindPublicationByPostId = (_id: string) => {
  const { publications } = useSelector(publicationSelectors);
  const index = publications.findIndex((publication) => {
    return publication._id === _id;
  });

  if (!publications[index]) {
    return null;
  }

  return publications[index].name;
};
