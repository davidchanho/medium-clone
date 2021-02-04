import { Document, model, Schema } from "mongoose";
import { ICommentDoc } from "./Comment";

export interface IPostDoc extends Document {
  publicationId: Schema.Types.ObjectId;
  title: string;
  body: string;
  readingTime: string;
  date: string;
  comments: ICommentDoc[];
}

const postSchema = new Schema(
  {
    publicationId: {
      type: String,
      ref: "publication",
    },
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
    image: {
      type: String,
      default:
        "https://miro.medium.com/fit/c/272/181/1*ts3kXw7MPHS_yrejwIbZHA.png",
    },
    readingTime: {
      type: String,
    },
    comments: [{ type: String, ref: "comment" }],
    date: {
      type: String,
      default: new Date().toString(),
    },
  },
  { timestamps: true }
);

const Post = model<IPostDoc>("post", postSchema);

export default Post;
