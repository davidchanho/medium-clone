import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import db from "../models";

const PUBLICATIONS_TO_ADD = 20;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/medium", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const newId = new mongoose.Types.ObjectId();

const newPub = new db.Publication({
  _id: newId,
  name: _.capitalize(faker.lorem.words(3).replace(/\s/g, "")),
  posts: [],
});

const newPost = new db.Post({
  publicationId: newId,
  title: _.capitalize(faker.lorem.words(3)),
  body: faker.lorem.paragraph(5),
});

newPub.posts.push(newPost);

Promise.all([newPub.save(), newPost.save()]).then(() => {
  console.log("seeding successful");
  process.exit(0);
})
.catch((err) => {
  console.log(err.message);
  process.exit(1);
});;
