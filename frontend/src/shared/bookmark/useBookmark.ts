import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { userSelectors } from "../../store";
import { IPost } from "../../store/posts/types";
import { useSelector } from "./../../hooks/useSelector";

export const useBookmark = (post: IPost) => {
  const { bookmarkPost } = useActions();
  const [isBookmark, setBookmark] = useState<boolean>(false);
  const { user } = useSelector(userSelectors);

  useEffect(() => {
    if (user.bookmarks.includes(post)) {
      setBookmark(true);
    }
  }, [user.bookmarks]);

  const onBookmarkPost = () => {
    if (post._id) {
      bookmarkPost(post);
    }
  };

  return { onBookmarkPost, isBookmark };
};
