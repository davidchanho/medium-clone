import axios from "axios";
import { IPost } from "../store/reducers/posts";

const postsUrl = "/api/posts/";

const db = {
  async fetchPosts() {
    const { data } = await axios.get<IPost[]>(postsUrl);
    return data;
  },
  async fetchPost(_id: string) {
    const { data } = await axios.get<IPost>(postsUrl + _id);
    return data;
  },
  addPost(post: IPost) {
    const { title, body } = post;
    axios.post<any>(postsUrl, { title, body });
  },
  deletePost(_id: string) {
    axios.delete<string>(postsUrl + _id);
  },
  updatePost(post: IPost) {
    axios.put<string>(postsUrl + post._id, post);
  },
};

export default db;
