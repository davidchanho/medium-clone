import React, { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { userSelectors } from "../../store";
import { PostProps } from "../../store/posts/types";

function Bookmark({ post }: PostProps) {
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

  return isBookmark ? (
    <BsBookmarkFill onClick={onBookmarkPost} />
  ) : (
    <BsBookmark onClick={onBookmarkPost} />
  );
}

export default Bookmark;
