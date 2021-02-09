import { useActions } from "../../hooks/useActions";

export const usePublicationItem = () => {
  const { getPublication } = useActions();

  const onGetPublication = (_id: string) => {
    getPublication(_id);
  };

  return { onGetPublication };
};
