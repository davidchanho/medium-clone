import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../store/reducers/posts";

export const usePost = (post: IPost) => {
  const { deletePost } = useActions();
  const navigate = useNavigate();

  const onDeletePost = () => {
    deletePost(post._id);
  };

  const onGetPost = () => {
    navigate(`/${post._id}`);
  };

  return { onDeletePost, onGetPost };
};
