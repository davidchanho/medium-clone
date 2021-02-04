import { publicationSelectors } from "../store";
import { useSelector } from "./useSelector";

export const useFindPublicationByPostId = (publicationId: string) => {
  const { publications } = useSelector(publicationSelectors);

  const index = publications.findIndex((publication) => {
    return publication._id === publicationId;
  });

  if (!publications[index]) {
    return null;
  }

  return publications[index].name;
};
