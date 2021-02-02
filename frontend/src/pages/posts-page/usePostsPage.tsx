import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";

export const usePostsPage = () => {
  const { fetchPosts, fetchPublications } = useActions();

  useEffect(() => {
    fetchPosts();
    fetchPublications();
  }, []);
};
