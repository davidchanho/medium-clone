import React, { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { postSelectors, userSelectors } from "../../store";

function Bookmark() {
  const { post } = useSelector(postSelectors);
  const { user } = useSelector(userSelectors);
  const { bookmarkPost } = useActions();
  const [isBookmark, setBookmark] = useState<boolean>(false);

  useEffect(() => {
    if (user?.bookmarks?.includes(post)) {
      setBookmark(true);
    }
  }, [user?.bookmarks, post]);

  const onBookmarkPost = () => {
    if (post._id) {
      bookmarkPost(post);
      setBookmark(!isBookmark);
    }
  };

  return (
    <span className="pointer" onClick={onBookmarkPost}>
      {isBookmark ? <BsBookmarkFill size="22" /> : <BsBookmark size="22" />}
    </span>
  );
}

export default Bookmark;
