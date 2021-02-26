import { CardProps } from "react-bootstrap";
import { IComment } from "../comments/types";
import { IPublication } from "./../publications/types";
import { IUser } from "./../users/types";

export interface IPost {
  _id?: string;
  publication: IPublication;
  user: IUser;
  title: string;
  body: string;
  image: string;
  readingTime: string;
  date: string;
  comments: IComment[];
}

export interface PostProps extends CardProps {
  post: IPost;
}
