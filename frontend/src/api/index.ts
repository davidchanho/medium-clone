import { comments } from "./comments";
import { posts } from "../store/posts/api";
import { publications } from "./publications";
import { users } from "./users";

const db = {
  ...comments,
  ...posts,
  ...publications,
  ...users
};

export default db;
