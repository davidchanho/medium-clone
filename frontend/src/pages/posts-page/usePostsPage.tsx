import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import {
  postSelectors,
  publicationSelectors,
  userSelectors,
} from "../../store";

export const usePostsPage = () => {
  const { getPosts, getPublications, getUser, getUsers } = useActions();
  const { posts } = useSelector(postSelectors);
  const { publications } = useSelector(publicationSelectors);
  const { users, user } = useSelector(userSelectors);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
    if (publications.length === 0) {
      getPublications();
    }
    if (users.length === 0) {
      getUsers();
    }
    if (!user._id) {
      getUser("601f56a32a6e993e983b157f");
    }
  }, []);
};
