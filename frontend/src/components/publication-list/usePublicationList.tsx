import { useSelector } from "react-redux";
import { publicationSelectors } from "../../store";

export const usePublicationList = () => {
  const { publications } = useSelector(publicationSelectors);

  return { publications };
};
