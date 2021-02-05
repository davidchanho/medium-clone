import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import db from "../models";
require("events").EventEmitter.defaultMaxListeners = 20;

const PUBLICATIONS_AMOUNT = 5;

const generateRandomNumber = () => {
  return _.random(3, 7);
};

const generateImg = () => {
  return `${faker.image.nature(200, 135)}?random=${Math.round(
    Math.random() * 1000
  )}`;
};

const generatePubName = () => {
  return _.capitalize(faker.lorem.words(3).replace(/\s/g, ""));
};

const generateBody = () => {
  return _.capitalize(faker.lorem.paragraph(5));
};

const generateId = () => {
  return new mongoose.Types.ObjectId();
};

const generateDate = () => {
  return faker.date.between("2020-01-01", new Date().toDateString());
};

const generateReadTime = (body: string) => {
  return `${Math.ceil(body.split(" ").length / 275)} min read`;
};

const generatePub = (publicationId: mongoose.Types._ObjectId) => {
  return new db.Publication({
    _id: publicationId,
    name: generatePubName(),
    posts: [],
  });
};

const generateTitle = () => {
  return _.capitalize(faker.lorem.words(3));
};

const generatePost = (
  postId: mongoose.Types._ObjectId,
  publicationId: mongoose.Types._ObjectId
) => {
  const body = generateBody();

  return new db.Post({
    _id: postId,
    publicationId,
    title: generateTitle(),
    body,
    image: generateImg(),
    date: generateDate(),
    readingTime: generateReadTime(body),
    comments: [],
  });
};

const generateComment = (postId: mongoose.Types._ObjectId) => {
  const body = generateBody();
  return new db.Comment({
    postId,
    body,
    date: generateDate(),
  });
};

const generateComments = (postId: mongoose.Types._ObjectId) => {
  return _.times(generateRandomNumber(), () => {
    const newComment = generateComment(postId);
    newComment.save();
    return newComment;
  });
};

const generatePosts = (publicationId: mongoose.Types._ObjectId) => {
  return _.times(generateRandomNumber(), () => {
    const postId = generateId();

    const newPost = generatePost(postId, publicationId);

    const comments = generateComments(postId);
    newPost.comments = comments;
    newPost.save();

    return newPost;
  });
};

const connectDb = () => {
  return mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/medium",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
};

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
