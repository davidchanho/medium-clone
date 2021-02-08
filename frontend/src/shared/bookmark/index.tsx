import React from "react";
import { BsBookmark } from "react-icons/bs";
import { PostProps } from "../../types";
import { useBookmark } from "./useBookmark";

function Bookmark({ post }: PostProps) {
  const { onBookmarkPost } = useBookmark(post);
  
  return <BsBookmark onClick={onBookmarkPost} />;
}

export default Bookmark;
