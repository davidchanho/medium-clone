import { Document, model, Schema } from "mongoose";
import { ICommentDoc } from "./Comment";
import { IPostDoc } from "./Post";

export interface IUserDoc extends Document {
  avatar: string;
  email: string;
  password: string;
  name: string;
  posts: IPostDoc[];
  comments: ICommentDoc[];
}

const userSchema = new Schema(
  {
    avatar: {
      type: String,
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
    posts: [{ type: String, ref: "post" }],
    comments: [{ type: String, ref: "comment" }],
  },
  { timestamps: true }
);

const User = model<IUserDoc>("user", userSchema);

export default User;
