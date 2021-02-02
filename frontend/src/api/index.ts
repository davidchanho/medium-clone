import axios from "axios";
import { IPost, IPublication } from "../store/reducers/posts";

const postsUrl = "/api/posts/";
const publicationsUrl = "/api/publications/";

const db = {
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
    axios.post<any>(postsUrl, { title, body });
  },
  deletePost(_id: string) {
    axios.delete<string>(postsUrl + _id);
  },
  updatePost(post: IPost) {
    axios.put<string>(postsUrl + post._id, post);
  },

  async getPublications() {
    const { data } = await axios.get<IPublication[]>(publicationsUrl);
    return data;
  },
  async getPublication(_id: string) {
    const { data } = await axios.get<IPublication>(publicationsUrl + _id);
    return data;
  },
  addPublication(publication: IPublication) {
    axios.post<any>(publicationsUrl, publication.name);
  },
  deletePublication(_id: string) {
    axios.delete<string>(publicationsUrl + _id);
  },
  updatePublication(post: IPublication) {
    axios.put<string>(publicationsUrl + post._id, post);
  },
};

export default db;
