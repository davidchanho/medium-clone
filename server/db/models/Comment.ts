import { Document, model, Schema } from "mongoose";

export interface ICommentDoc extends Document {
  postId: string;
  userId: string;
  body: string;
  date: string;
}

const commentSchema = new Schema(
  {
    postId: {
      type: String,
      ref: "post",
    },
    userId: {
      type: String,
      ref: "user",
    },
    body: {
      type: String,
      minlength: [6, "comment body must be at least 6 characters long"],
      required: [true, "comment body is required"],
    },
    date: {
      type: String,
      default: new Date().toString(),
    },
  },
  { timestamps: true }
);

const Comment = model<ICommentDoc>("comment", commentSchema);

export default Comment;
