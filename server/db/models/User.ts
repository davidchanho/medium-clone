import { Document, model, Schema } from "mongoose";
import { ICommentDoc } from "./Comment";
import { IPostDoc } from "./Post";

export interface IUserDoc extends Document {
  avatar: string;
  photo: string;
  email: string;
  password: string;
  name: string;
  about: string;
  bookmarks: IPostDoc[];
  posts: IPostDoc[];
  comments: ICommentDoc[];
}

const userSchema = new Schema(
  {
    avatar: {
      type: String,
    },
    photo: { type: String },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    about: {
      type: String,
    },
    bookmarks: [{ type: String, ref: "post" }],
    posts: [{ type: String, ref: "post" }],
    comments: [{ type: String, ref: "comment" }],
  },
  { timestamps: true }
);

const User = model<IUserDoc>("user", userSchema);

export default User;
