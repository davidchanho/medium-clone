import EventEmitter from "events";
import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import { connectDb } from "..";
import db from "../models";
import { IPublicationDoc } from "./../models/Publication";
import { IUserDoc } from "./../models/User";
import {
  calcReadTime,
  generateBody,
  generateDate,
  generateId,
  generatePhoto,
  generateRandomNumber,
  generateSampleSize,
  generateTopicName,
} from "./helpers";

EventEmitter.defaultMaxListeners = 20;

export const PUBLICATIONS_AMOUNT = 5;

export const generatePublication = (publicationId: mongoose.Types._ObjectId) => {
  return new db.Publication({
    _id: publicationId,
    icon: generatePhoto(20, 20),
    name: _.capitalize(faker.lorem.word(8)),
    posts: [],
  });
};

export const generatePost = (
  postId: mongoose.Types._ObjectId,
  user: IUserDoc,
  publication: IPublicationDoc
) => {
  const body = generateBody();

  return new db.Post({
    _id: postId,
    publication,
    user,
    title: _.capitalize(faker.lorem.words(3)),
    body,
    image: generatePhoto(200, 135),
    date: generateDate(),
    readingTime: calcReadTime(body),
    comments: [],
  });
};

export const generatePosts = (publication: IPublicationDoc, user: IUserDoc) => {
  return _.times(generateRandomNumber(), () => {
    const postId = generateId();

    const post = generatePost(postId, user, publication);

    const comments = generateComments(postId, user);

    const commentsSample = generateSampleSize(comments);
    user.comments = commentsSample;

    post.publication = publication;
    post.user = user;
    post.comments = comments;

    post.save();

    return post;
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
    followers: [],
    publications: [],
    bookmarks: [],
    posts: [],
    comments: [],
  });
};

export const generateComment = (postId: mongoose.Types._ObjectId, user: IUserDoc) => {
  return new db.Comment({
    postId,
    userId: user._id,
    user,
    body: generateBody(),
    date: generateDate(),
  });
};

export const generateComments = (postId: mongoose.Types._ObjectId, user: IUserDoc) => {
  return _.times(generateRandomNumber(), () => {
    const comment = generateComment(postId, user);

    comment.save();

    return comment;
  });
};

export const generateTopic = () => {
  return new db.Topic({
    name: generateTopicName(),
  });
};

const seed = () =>
  _.times(PUBLICATIONS_AMOUNT, () => {
    connectDb();

    mongoose.connection.dropDatabase();

    const publicationId = generateId();

    const publication = generatePublication(publicationId);

    const user = generateUser();
    const posts = generatePosts(publication, user);
    const topic = generateTopic();

    const postsSample = generateSampleSize(posts);

    publication.posts = posts;
    publication.topic = topic.name;
    user.posts = postsSample;
    user.bookmarks = postsSample;

    Promise.all([publication.save(), user.save(), topic.save()])
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
