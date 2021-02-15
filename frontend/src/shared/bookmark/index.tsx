import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
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
    if (user?.bookmarks.includes(post)) {
      setBookmark(true);
    }
  }, [user?.bookmarks]);

  const onBookmarkPost = () => {
    if (post._id) {
      bookmarkPost(post);
    }
  };

  return (
    <ListGroup.Item className="d-flex align-items-center">
      {isBookmark ? (
        <BsBookmarkFill onClick={onBookmarkPost} size="28" />
      ) : (
        <BsBookmark onClick={onBookmarkPost} size="28" />
      )}
    </ListGroup.Item>
  );
}

export default Bookmark;
