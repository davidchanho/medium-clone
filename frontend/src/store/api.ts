import axios from "axios";
import { IComment, IItem, IPost, IPublication, ITopic, IUser } from "../types";

const commentsUrl = "/api/comments/";
const postsUrl = "/api/posts/";
const publicationsUrl = "/api/publications/";
const usersUrl = "/api/users/";
const topicsUrl = "/api/topics/";
const itemsUrl = (name: string) => `/api/${name}/`;

const API = {
  async getItems(name: string) {
    const { data } = await axios.get<IItem[]>(itemsUrl(name));
    return data;
  },
  async getItem(_id: string, name: string) {
    const { data } = await axios.get<IItem>(itemsUrl(name) + _id);
    return data;
  },
  addItem(item: IItem, name: string) {
    axios.post<any>(itemsUrl(name), item);
  },
  deleteItem(_id: string, name: string) {
    axios.delete<string>(itemsUrl(name) + _id);
  },
  updateItem(updateItem: IItem, name: string) {
    axios.put<string>(itemsUrl(name) + updateItem._id, updateItem);
  },

  async getComments() {
    const { data } = await axios.get<IComment[]>(commentsUrl);
    return data;
  },
  async getComment(_id: string) {
    const { data } = await axios.get<IComment>(commentsUrl + _id);
    return data;
  },
  addComment(comment: IComment) {
    const { body, postId } = comment;
    axios.post<any>(commentsUrl, { body, postId });
  },
  deleteComment(_id: string) {
    axios.delete<string>(commentsUrl + _id);
  },
  updateComment(comment: IComment) {
    axios.put<string>(commentsUrl + comment._id, comment);
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
    axios.post<any>(publicationsUrl, post);
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
  async getTopics() {
    const { data } = await axios.get<ITopic[]>(topicsUrl);
    return data;
  },
  async getUsers() {
    const { data } = await axios.get<IUser[]>(usersUrl);
    return data;
  },
  async getUser(_id: string) {
    const { data } = await axios.get<IUser>(usersUrl + _id);
    return data;
  },
  addUser(user: IUser) {
    axios.post<any>(usersUrl, user.name);
  },
  deleteUser(_id: string) {
    axios.delete<string>(usersUrl + _id);
  },
  updateUser(post: IUser) {
    axios.put<string>(usersUrl + post._id, post);
  },
};

export default API;
