import { combineReducers } from "@reduxjs/toolkit";
import commentsReducers from "./comments";
import postsReducers from "./posts";
import publicationsReducers from "./publications";

export default combineReducers({
  posts: postsReducers,
  comments: commentsReducers,
  publications: publicationsReducers,
});
