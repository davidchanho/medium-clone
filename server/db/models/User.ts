import { Document, model, Schema } from "mongoose";
import { ICommentDoc } from "./Comment";
import { IPostDoc } from "./Post";
import { IPublicationDoc } from "./Publication";

export interface IUserDoc extends Document {
  avatar: string;
  photo: string;
  email: string;
  password: string;
  name: string;
  about: string;
  publications: IPublicationDoc[];
  followers: IUserDoc[];
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
    followers: [{ type: String, ref: "user" }],
    publications: [{ type: String, ref: "publication" }],
    bookmarks: [{ type: String, ref: "post" }],
    posts: [{ type: String, ref: "post" }],
    comments: [{ type: String, ref: "comment" }],
  },
  { timestamps: true }
);

const User = model<IUserDoc>("user", userSchema);

export default User;
