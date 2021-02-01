import { Document, model, Schema } from "mongoose";

export interface IPostDoc extends Document {
  title: string;
  body: string;
}

const postSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [6, "post title must be at least 6 characters long"],
      required: [true, "post title is required"],
    },
    body: {
      type: String,
      minlength: [6, "post body must be at least 6 characters long"],
      required: [true, "post body is required"],
    },
  },
  { timestamps: true }
);

const Post = model<IPostDoc>("post", postSchema);

export default Post;
