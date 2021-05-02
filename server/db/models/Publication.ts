import { Document, model, Schema } from "mongoose";
import { IPostDoc } from "./Post";

export interface IPublicationDoc extends Document {
  name: string;
  icon: string;
  posts: IPostDoc[];
  topic: string;
}

const publicationSchema = new Schema({
  name: {
    type: String,
    requied: [true, "publication name is required"],
    minlength: [6, "publication name must be at least 6 characters"],
  },
  icon: { type: String },
  posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
  topic: { type: String, ref: "topic" },
});

const Publication = model<IPublicationDoc>("publication", publicationSchema);

export default Publication;
