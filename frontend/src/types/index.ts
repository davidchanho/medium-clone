import { IComment } from "../store/comments/types";
import { IPost } from "../store/posts/types";

export interface PublicationProps {
  label: string;
}

export interface IPublication {
  _id: string;
  name: string;
  icon: string;
}

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
