import { combineReducers } from "redux";
import commentsReducers from "./comments/reducers";
import postsReducers from "./posts/reducers";
import publicationsReducers from "./publications/reducers";
import topicsReducers from "./topics/reducers";
import usersReducers from "./users/reducers";

export default combineReducers({
  posts: postsReducers,
  comments: commentsReducers,
  publications: publicationsReducers,
  users: usersReducers,
  topics: topicsReducers,
});
