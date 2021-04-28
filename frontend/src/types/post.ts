import { IComment } from "./comment";
import { IPublication } from "./publication";
import { IUser } from "./user";

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
  excerpt?: number;
}
