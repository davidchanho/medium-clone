import axios from "axios";
import { IPost } from "../types";
import { publicationsUrl } from "./publications";

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
    const { title, body, publicationId } = post;
    axios.post<any>(publicationsUrl, { title, body, publicationId });
  },
  deletePost(_id: string) {
    axios.delete<string>(postsUrl + _id);
  },
  updatePost(post: IPost) {
    axios.put<string>(postsUrl + post._id, post);
  },
};
