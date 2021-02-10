import { combineReducers } from "redux";
import commentsReducers from "../comments/reducers";
import postsReducers from "../posts/reducers";
import publicationsReducers from "./publications";
import usersReducers from "./users";

export default combineReducers({
  posts: postsReducers,
  comments: commentsReducers,
  publications: publicationsReducers,
  users: usersReducers,
});
