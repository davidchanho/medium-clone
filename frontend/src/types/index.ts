import { CardProps } from "react-bootstrap";

export interface PostProps extends CardProps {
  post: IPost;
}

export interface PublicationProps {
  label: string;
}

export interface IPublication {
  _id: string;
  name: string;
  icon: string;
}

export interface IComment {
  _id?: string;
  postId: string;
  userId: string;
  body: string;
  date: string;
}

export interface IPost {
  _id?: string;
  publicationId: string;
  userId: string;
  title: string;
  body: string;
  image: string;
  date: string;
  readingTime: string;
  comments: IComment[];
}

export interface IUser {
  _id?: string;
  avatar: string;
  email: string;
  name: string;
  about: string;
  bookmarks: IPost[];
  posts: IPost[];
  comments: IComment[];
}
