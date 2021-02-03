import axios from "axios";
import { IComment, IPost, IPublication } from "../types";

const commentsUrl = "/api/comments/";
const postsUrl = "/api/posts/";
const publicationsUrl = "/api/publications/";

const db = {
  async getComments() {
    const { data } = await axios.get<IComment[]>(commentsUrl);
    return data;
  },
  async getComment(_id: string) {
    const { data } = await axios.get<IComment>(commentsUrl + _id);
    return data;
  },
  addComment(comment: IComment) {
    const {body, postId} = comment
    axios.post<any>(publicationsUrl, {body, postId});
  },
  deleteComment(_id: string) {
    axios.delete<string>(commentsUrl + _id);
  },
  updateComment(post: IComment) {
    axios.put<string>(commentsUrl + post._id, post);
  },

  async getPosts() {
    const { data } = await axios.get<IPost[]>(postsUrl);
    return data;
  },
  async getPost(_id: string) {
    const { data } = await axios.get<IPost>(postsUrl + _id);
    return data;
  },
  addPost(post: IPost) {
    const {title, body, publicationId} = post
    axios.post<any>(publicationsUrl, {title, body, publicationId});
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
