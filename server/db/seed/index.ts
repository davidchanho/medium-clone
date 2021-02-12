import mongoose  from 'mongoose';
import EventEmitter from "events";
import _ from "lodash";
import { generatePosts, generatePub, generateUser, PUBLICATIONS_AMOUNT } from "./utils";
import { generateId, generateSampleSize } from './helpers';
import { connectDb } from '..';

EventEmitter.defaultMaxListeners = 20;

const seed = () => _.times(PUBLICATIONS_AMOUNT, () => {
    connectDb();

    mongoose.connection.dropDatabase();

    const publicationId = generateId();

    const newPub = generatePub(publicationId);

    const posts = generatePosts(publicationId);

    const postsSample = generateSampleSize(posts);

    const user = generateUser();

    newPub.posts = posts;
    user.posts = postsSample;

    Promise.all([newPub.save(), user.save()])
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
