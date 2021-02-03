import { Document, model, Schema } from "mongoose";

export interface ICommentDoc extends Document {
  postId: Schema.Types.ObjectId;
  body: string;
  date: string;
}

const commentSchema = new Schema(
  {
    date: {
      type: String,
      default: new Date().toString(),
    },
    postId: {
      type: String,
      ref: "post",
    },
    body: {
      type: String,
      minlength: [6, "comment body must be at least 6 characters long"],
      required: [true, "comment body is required"],
    },
  },
  { timestamps: true }
);

const Comment = model<ICommentDoc>("comment", commentSchema);

export default Comment;
