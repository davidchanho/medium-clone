import { CardProps } from "react-bootstrap";
import { IComment } from "../../types";

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

export interface PostProps extends CardProps {
  post: IPost;
}
