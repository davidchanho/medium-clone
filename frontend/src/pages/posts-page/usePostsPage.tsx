import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";

export const usePostsPage = () => {
  const { getPosts, getPublications } = useActions();

  useEffect(() => {
    getPosts();
    getPublications();
  }, []);
};
