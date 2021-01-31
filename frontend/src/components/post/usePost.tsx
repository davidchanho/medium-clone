import { useActions } from "../../hooks/useActions";
import { IPost } from "../../store/reducers/posts";

export const usePost = (post: IPost) => {
  const { deletePost, fetchPost } = useActions();

  const onDeletePost = () => {
    deletePost(post._id);
  };

  const onFetchPost = () => {
    fetchPost(post._id);
  };

  return { onDeletePost, onFetchPost };
};
