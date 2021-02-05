import { Document, model, Schema } from "mongoose";
import { ICommentDoc } from "./Comment";
import { IPostDoc } from "./Post";

export interface IUserDoc extends Document {
  email: string;
  password: string;
  name: string;
  token: string;
  date: string;
  posts: IPostDoc[];
  bookmarks: IPostDoc[];
  comments: ICommentDoc[];
}

const userSchema = new Schema(
  {
    publicationId: {
      type: String,
      ref: "publication",
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    token: {
      type: String,
    },
    publicationFollow: [{ type: String, ref: "publication" }],
    followers: [{ type: String, ref: "user" }],
    posts: [{ type: String, ref: "post" }],
    bookmarks: [{ type: String, ref: "bookmark" }],
    comments: [{ type: String, ref: "comment" }],
    date: {
      type: String,
      default: new Date().toString(),
    },
  },
  { timestamps: true }
);

const User = model<IUserDoc>("user", userSchema);

export default User;
