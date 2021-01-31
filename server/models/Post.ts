import { Document, model, Schema } from "mongoose";

export interface IPostDoc extends Document {
  title: string;
  body: string;
}

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Post = model<IPostDoc>("post", postSchema);

export default Post;
