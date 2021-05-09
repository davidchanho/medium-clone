import { Document, model, Schema } from "mongoose";
import { ICommentDoc } from "./Comment";
import { IPublicationDoc } from "./Publication";
import { IUserDoc } from "./User";

export interface IPostDoc extends Document {
  publication: IPublicationDoc;
  user: IUserDoc;
  title: string;
  body: string;
  image: string;
  readingTime: string;
  date: string;
  claps: number;
  comments: ICommentDoc[];
}

const postSchema = new Schema(
  {
    publication: {
      type: Schema.Types.ObjectId,
      ref: "publication",
    },
    user: { type: Schema.Types.ObjectId, ref: "user" },
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
    claps: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    date: {
      type: String,
      default: new Date().toString(),
    },
  },
  { timestamps: true }
);

const Post = model<IPostDoc>("post", postSchema);

export default Post;
