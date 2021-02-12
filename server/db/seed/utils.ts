import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import db from "../models";
import {
  calcReadTime,
  generateBody,
  generateDate,
  generateId,
  generatePhoto,
  generateRandomNumber,
} from "./helpers";

export const PUBLICATIONS_AMOUNT = 5;

export const generatePub = (publicationId: mongoose.Types._ObjectId) => {
  return new db.Publication({
    _id: publicationId,
    icon: generatePhoto(20, 20),
    name: _.capitalize(faker.lorem.word(8)),
    posts: [],
  });
};

const generatePost = (
  postId: mongoose.Types._ObjectId,
  publicationId: mongoose.Types._ObjectId
) => {
  const body = generateBody();

  return new db.Post({
    _id: postId,
    publicationId,
    userId: "",
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

const generateComment = (postId: mongoose.Types._ObjectId) => {
  const body = generateBody();

  return new db.Comment({
    postId,
    userId: "",
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

