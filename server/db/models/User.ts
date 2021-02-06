import { Document, model, Schema } from "mongoose";
import { ICommentDoc } from "./Comment";
import { IPostDoc } from "./Post";

export interface IUserDoc extends Document {
  email: string;
  password: string;
  name: string;
  posts: IPostDoc[];
  comments: ICommentDoc[];
  date: string;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    posts: [{ type: String, ref: "post" }],
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
