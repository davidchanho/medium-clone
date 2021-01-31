import axios from "axios";
import { IPost } from "../store/reducers/posts";

const postsUrl = "/api/posts/";

const db = {
  getPosts: async () => {
    const { data } = await axios.get<IPost[]>(postsUrl);
    return data;
  },
  deletePost: (_id: string) => axios.delete<string>(postsUrl + _id),
};

export default db;
