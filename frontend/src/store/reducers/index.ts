import { combineReducers } from "@reduxjs/toolkit";
import commentsReducers from "./comments";
import postsReducers from "./posts";
import publicationsReducers from "./publications";
import usersReducers from "./users";

export default combineReducers({
  posts: postsReducers,
  comments: commentsReducers,
  publications: publicationsReducers,
  users: usersReducers,
});
