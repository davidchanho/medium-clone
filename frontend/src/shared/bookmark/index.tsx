import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { PostProps } from "../../store/posts/types";
import { useBookmark } from "./useBookmark";

function Bookmark({ post }: PostProps) {
  const { isBookmark, onBookmarkPost } = useBookmark(post);

  return isBookmark ? (
    <BsBookmarkFill onClick={onBookmarkPost} />
  ) : (
    <BsBookmark onClick={onBookmarkPost} />
  );
}

export default Bookmark;
