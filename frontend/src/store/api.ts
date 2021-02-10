import { comments } from "./comments/api";
import { posts } from "./posts/api";
import { publications } from "./publications/api";
import { users } from "./users/api";

const db = {
  ...comments,
  ...posts,
  ...publications,
  ...users
};

export default db;
