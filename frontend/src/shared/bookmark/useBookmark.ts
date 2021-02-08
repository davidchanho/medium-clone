import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types";

export const useBookmark = (post: IPost) => {
  const { bookmarkPost } = useActions();

  const onBookmarkPost = () => {
    if (post._id) {
      bookmarkPost(post);
    }
  };

  return { onBookmarkPost };
};
