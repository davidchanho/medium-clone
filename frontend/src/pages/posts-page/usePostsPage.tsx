import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors, publicationSelectors } from "../../store";

export const usePostsPage = () => {
  const { getPosts, getPublications } = useActions();
  const { posts } = useSelector(postSelectors);
  const { publications } = useSelector(publicationSelectors);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
    if (publications.length === 0) {
      getPublications();
    }
  }, []);
};
