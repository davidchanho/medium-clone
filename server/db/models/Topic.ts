import { Document, model, Schema } from "mongoose";

export interface ITopicDoc extends Document {
  name: string;
}

const topicSchema = new Schema({
  name: {
    type: String,
    requied: [true, "topic name is required"],
    minlength: [6, "topic name must be at least 6 characters"],
  },
});

const Topic = model<ITopicDoc>("topic", topicSchema);

export default Topic;
