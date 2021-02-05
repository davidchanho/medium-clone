import EventEmitter from "events";
import _ from "lodash";
import mongoose from "mongoose";
import {
  connectDb,
  generateId,
  generatePosts,
  generatePub,
  PUBLICATIONS_AMOUNT,
} from "./utils";

EventEmitter.defaultMaxListeners = 20;

const seed = () =>
  _.times(PUBLICATIONS_AMOUNT, () => {
    connectDb();
    mongoose.connection.dropDatabase();

    const publicationId = generateId();

    const newPub = generatePub(publicationId);

    const posts = generatePosts(publicationId);

    newPub.posts = posts;

    newPub
      .save()
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
