import { IComment } from "./comment";
import { IPost } from "./post";
import { IPublication } from "./publication";

export interface IUser {
  _id?: string;
  avatar: string;
  photo: string;
  email: string;
  name: string;
  about: string;
  following: {
    users: IUser[];
    publications: IPublication[];
  };
  bookmarks: IPost[];
  posts: IPost[];
  comments: IComment[];
}
