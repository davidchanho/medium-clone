import { Schema } from "mongoose";
import { IPostDoc } from "./Post";

interface IPublicationDoc extends Document {
  name: string;
  users: any[];
  posts: IPostDoc[];
}

const publicationSchema = new Schema({
  name: {
    type: String,
    unique: [true, "publication name must be unique"],
    requied: [true, "publication name is required"],
    minlength: [6, "publication name must be at least 6 characters"],
  },
  users: [],
  posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
});
