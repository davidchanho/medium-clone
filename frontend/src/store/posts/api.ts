import axios from "axios";
import { IPost } from "../../types/post";
import { publicationsUrl } from "../publications/api";

export const postsUrl = "/api/posts/";

export const posts = {
  async getPosts() {
    const { data } = await axios.get<IPost[]>(postsUrl);
    return data;
  },
  async getPost(_id: string) {
    const { data } = await axios.get<IPost>(postsUrl + _id);
    return data;
  },
  addPost(post: IPost) {
    const { title, body } = post;
    axios.post<any>(publicationsUrl, { title, body });
  },
  deletePost(_id: string) {
    axios.delete<string>(postsUrl + _id);
  },
  updatePost(post: IPost) {
    axios.put<string>(postsUrl + post._id, post);
  },
};
