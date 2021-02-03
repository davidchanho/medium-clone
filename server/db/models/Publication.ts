import { Document, model, Schema } from "mongoose";
import { IPostDoc } from "./Post";

interface IPublicationDoc extends Document {
  name: string;
  posts: IPostDoc[];
}

const publicationSchema = new Schema({
  name: {
    type: String,
    unique: [true, "publication name must be unique"],
    requied: [true, "publication name is required"],
    minlength: [6, "publication name must be at least 6 characters"],
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "post", autopopulate: true }],
});

const Publication = model<IPublicationDoc>("publication", publicationSchema);
publicationSchema.plugin(require('mongoose-autopopulate'));
export default Publication;
