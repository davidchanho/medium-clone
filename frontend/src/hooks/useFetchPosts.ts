import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelectors } from "../store";
import { useActions } from "./useActions";

export const useFetchPosts = () => {
  const { getPosts, getPublications, getUser, getUsers } = useActions();
  const { user } = useSelector(userSelectors);

  useEffect(() => {
    getPosts();
    getPublications();
    getUsers();
    if (!user?._id) {
      getUser("6024670da4cf7653c06c6dd3");
    }
  }, [getPosts, getPublications, getUser, getUsers, user?._id]);
};
