import EventEmitter from "events";
import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import { connectDb } from "..";
import db from "../models";
import { IUserDoc } from "./../models/User";
import {
  calcReadTime,
  generateBody,
  generateDate,
  generateId,
  generatePhoto,
  generateRandomNumber,
  generateSampleSize,
} from "./helpers";

EventEmitter.defaultMaxListeners = 20;

export const PUBLICATIONS_AMOUNT = 5;

export const generatePub = (publicationId: mongoose.Types._ObjectId) => {
  return new db.Publication({
    _id: publicationId,
    icon: generatePhoto(20, 20),
    name: _.capitalize(faker.lorem.word(8)),
    posts: [],
  });
};

export const generatePost = (
  postId: mongoose.Types._ObjectId,
  publicationId: mongoose.Types._ObjectId,
  userId: mongoose.Types._ObjectId
) => {
  const body = generateBody();

  return new db.Post({
    _id: postId,
    publicationId,
    userId,
    title: _.capitalize(faker.lorem.words(3)),
    body,
    image: generatePhoto(200, 135),
    date: generateDate(),
    readingTime: calcReadTime(body),
    comments: [],
  });
};

export const generateUser = () => {
  return new db.User({
    avatar: generatePhoto(30, 30),
    photo: generatePhoto(60, 60),
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    about: faker.lorem.lines(4),
    posts: [],
    comments: [],
  });
};

const generateComment = (postId: mongoose.Types._ObjectId, user: IUserDoc) => {
  return new db.Comment({
    postId,
    userId: user._id,
    user,
    body: generateBody(),
    date: generateDate(),
  });
};

const generateComments = (postId: mongoose.Types._ObjectId, user: IUserDoc) => {
  return _.times(generateRandomNumber(), () => {
    const comment = generateComment(postId, user);

    comment.save();

    return comment;
  });
};

export const generatePosts = (
  publicationId: mongoose.Types._ObjectId,
  user: IUserDoc
) => {
  return _.times(generateRandomNumber(), () => {
    const postId = generateId();

    const userId = user._id;

    const post = generatePost(postId, publicationId, userId);

    const comments = generateComments(postId, userId);

    const commentsSample = generateSampleSize(comments);
    user.comments = commentsSample;

    post.userId = userId;
    post.comments = comments;

    post.save();

    return post;
  });
};

const seed = () =>
  _.times(PUBLICATIONS_AMOUNT, () => {
    connectDb();

    mongoose.connection.dropDatabase();

    const publicationId = generateId();

    const publication = generatePub(publicationId);

    const user = generateUser();
    const posts = generatePosts(publicationId, user);

    const postsSample = generateSampleSize(posts);

    publication.posts = posts;
    user.posts = postsSample;
    user.bookmarks = postsSample;

    Promise.all([publication.save(), user.save()])
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
