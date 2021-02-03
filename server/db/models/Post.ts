import { Document, model, Schema } from "mongoose";

export interface IPostDoc extends Document {
  publicationId: Schema.Types.ObjectId;
  title: string;
  body: string;
  readingTime: string;
}

const postSchema = new Schema(
  {
    date: {
      type: String,
      default: new Date().toString()
    },
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
    }
  },
  { timestamps: true }
);

const Post = model<IPostDoc>("post", postSchema);

export default Post;
