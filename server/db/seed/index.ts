import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import db from "../models";

const seed = () =>
  _.times(20, () => {
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

    const posts = _.times(5, () => {
      const newPost = new db.Post({
        publicationId: newId,
        title: _.capitalize(faker.lorem.words(3)),
        body: faker.lorem.paragraph(5),
        date: faker.date.between("2020-01-01", new Date().toDateString()),
      });
      newPost.save();
      return newPost;
    });

    newPub.posts = posts;

    Promise.all([newPub.save()])
      .then(() => {
        console.log("seeding successful");
        process.exit(0);
      })
      .catch((err) => {
        console.log(err.message);
        process.exit(1);
      });
  });

seed();
