import { IPublication } from "../publications/types";
import { IComment } from "../comments/types";
import { IPost } from "../posts/types";

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
  