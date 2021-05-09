import { IPost, IPublication, IUser } from "../types";

export const testUser: IUser = {
  _id: "test",
  avatar: "test",
  photo: "test",
  email: "test",
  name: "test",
  about: "test",
  following: {
    users: [],
    publications: [],
  },
  bookmarks: [],
  posts: [],
  comments: [],
};

export const testPublication: IPublication = {
  _id: "test",
  name: "test",
  icon: "test",
  topic: { _id: "test", name: "test" },
};

export const testPost: IPost = {
  _id: "test",
  publication: testPublication,
  user: testUser,
  title: "test",
  body: "test",
  image: "test",
  readingTime: "test",
  date: "test",
  claps: 0,
  comments: [],
};
