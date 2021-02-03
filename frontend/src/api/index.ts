import { comments } from "./comments";
import { posts } from "./posts";
import { publications } from "./publications";

const db = {
  ...comments,
  ...posts,
  ...publications,
};

export default db;
