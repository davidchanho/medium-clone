import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useFindPublicationByPostId } from "../../hooks/useFindPublicationbyPostId";
import { IPost } from "../../store/reducers/posts";

export const usePost = (post: IPost) => {
  const { deletePost } = useActions();
  const navigate = useNavigate();
  const publicationName = useFindPublicationByPostId(post.publicationId)

  const onDeletePost = () => {
    if(post._id) {
      deletePost(post._id);
    }
  };

  const onGetPost = () => {
    navigate(`/${post._id}`);
  };

  return { onDeletePost, onGetPost, publicationName };
};
