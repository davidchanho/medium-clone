import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types";

export const usePost = (post: IPost) => {
  const { deletePost, bookmarkPost } = useActions();
  const navigate = useNavigate();

  const onDeletePost = () => {
    if (post._id) {
      deletePost(post._id);
    }
  };

  const onBookmarkPost = () => {
    if (post._id) {
      bookmarkPost(post);
    }
  };

  const onGetPost = () => {
    navigate(`/${post._id}`);
  };

  return { onDeletePost, onBookmarkPost, onGetPost };
};
