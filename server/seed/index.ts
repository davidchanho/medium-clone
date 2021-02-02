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

function createPublication() {
  const newId = new mongoose.Types.ObjectId();
  return {
    _id: newId,
    name: _.capitalize(faker.lorem.words(3).replace(/\s/g, '')),
    posts: getPost(newId),
  };
}

function getPost(newId: any) {
  const posts = _.times(5, () => ({
    _id: new mongoose.Types.ObjectId(),
    publicationId: newId,
    title: _.capitalize(faker.lorem.words(3)),
    body: faker.lorem.paragraph(5),
  }));

  return [...posts];
}

const publications = _.times(PUBLICATIONS_TO_ADD, () => createPublication());

db.Publication.insertMany(publications)
  .then(() => {
    console.log("seeding successful");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
