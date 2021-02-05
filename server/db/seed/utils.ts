import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import db from "../models";

export const PUBLICATIONS_AMOUNT = 5;

export const generateRandomNumber = () => {
  return _.random(3, 7);
};

export const generateImg = () => {
  return `${faker.image.nature(200, 135)}?random=${Math.round(
    Math.random() * 1000
  )}`;
};

export const generatePubName = () => {
  return _.capitalize(faker.lorem.words(3).replace(/\s/g, ""));
};

export const generateBody = () => {
  return _.capitalize(faker.lorem.paragraph(5));
};

export const generateId = () => {
  return new mongoose.Types.ObjectId();
};

export const generateDate = () => {
  const today = new Date().toDateString();

  return faker.date.between("2020-01-01", today);
};

export const generateReadTime = (body: string) => {
  return `${Math.ceil(body.split(" ").length / 275)} min read`;
};

export const generatePub = (publicationId: mongoose.Types._ObjectId) => {
  return new db.Publication({
    _id: publicationId,
    name: generatePubName(),
    posts: [],
  });
};

export const generateTitle = () => {
  return _.capitalize(faker.lorem.words(3));
};

export const generatePost = (
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

export const generateComment = (postId: mongoose.Types._ObjectId) => {
  const body = generateBody();

  return new db.Comment({
    postId,
    body,
    date: generateDate(),
  });
};

export const generateComments = (postId: mongoose.Types._ObjectId) => {
  return _.times(generateRandomNumber(), () => {
    const newComment = generateComment(postId);

    newComment.save();

    return newComment;
  });
};

export const generatePosts = (publicationId: mongoose.Types._ObjectId) => {
  return _.times(generateRandomNumber(), () => {
    const postId = generateId();

    const newPost = generatePost(postId, publicationId);

    const comments = generateComments(postId);

    newPost.comments = comments;

    newPost.save();

    return newPost;
  });
};

export const connectDb = () => {
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
