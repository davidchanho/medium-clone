import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors, userSelectors } from "../../store";
import { IconBookmark, IconBookmarkFill } from "../icons";

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
      {isBookmark ? <IconBookmarkFill /> : <IconBookmark />}
    </span>
  );
}

export default Bookmark;
