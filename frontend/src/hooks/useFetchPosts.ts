import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelectors } from "../store";
import { useActions } from "./useActions";

export const useFetchPosts = () => {
  const {
    getPosts,
    getPublications,
    getUser,
    getUsers,
    getTopics,
  } = useActions();
  const { user } = useSelector(userSelectors);

  useEffect(() => {
    getPosts();
    getPublications();
    getUsers();
    getTopics();
    if (!user?._id) {
      getUser("6089c90471a8c04882da0eb8");
    }
  }, []);
};
