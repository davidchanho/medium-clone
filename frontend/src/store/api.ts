import axios, { AxiosResponse } from "axios";
import { IComment, IPost, IPublication, ITopic, IUser } from "../types";

const instance = axios.create({
  baseURL: "/api",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  patch: (url: string, body: {}) =>
    instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

const URL = {
  comments: "/comments/",
  posts: "/posts/",
  publications: "/publications/",
  users: "/users/",
  topics: "/topics/",
};

const API = {
  getPosts: async (): Promise<IPost[]> => requests.get(URL.posts),
  getPost: async (_id: string): Promise<IPost> => requests.get(URL.posts + _id),
  addPost: (post: IPost) => requests.post(URL.posts, post),
  updatePost: (post: IPost) => requests.patch(URL.posts, post),
  deletePost: (_id: string) => requests.delete(URL.posts + _id),

  getComments: async (): Promise<IComment[]> => requests.get(URL.comments),
  getComment: async (_id: string): Promise<IComment> =>
    requests.get(URL.comments + _id),
  addComment: (comment: IComment) => requests.post(URL.comments, comment),
  updateComment: (comment: IComment) => requests.patch(URL.comments, comment),
  deleteComment: (_id: string) => requests.delete(URL.comments + _id),

  getPublications: async (): Promise<IPublication[]> =>
    requests.get(URL.publications),
  getPublication: async (_id: string): Promise<IPublication> =>
    requests.get(URL.publications + _id),

  getTopics: async (): Promise<ITopic[]> => requests.get(URL.topics),

  getUsers: async (): Promise<IUser[]> => requests.get(URL.users),
  getUser: async (_id: string): Promise<IUser> => requests.get(URL.users + _id),
  addUser: (user: IUser) => requests.post(URL.users, user),
  updateUser: (user: IUser) => requests.patch(URL.users, user),
  deleteUser: (_id: string) => requests.delete(URL.users + _id),
};

export default API;
