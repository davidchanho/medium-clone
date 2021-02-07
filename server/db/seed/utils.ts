import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";
import db from "../models";

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
  const today = new Date().toDateString();

  return faker.date.between("2020-01-01", today);
};

const generateReadTime = (body: string) => {
  return `${Math.ceil(body.split(" ").length / 275)} min read`;
};

const generatePub = (publicationId: mongoose.Types._ObjectId) => {
  return new db.Publication({
    _id: publicationId,
    icon: generateAvatar(),
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
    userId: '',
    title: generateTitle(),
    body,
    image: generateImg(),
    date: generateDate(),
    readingTime: generateReadTime(body),
    comments: [],
  });
};

const generateAvatar = () => {
  return `${faker.image.animals(30, 30)}?random=${Math.round(
    Math.random() * 1000
  )}`;
};

const generateEmail = () => {
  return faker.internet.email();
};

const generatePassword = () => {
  return faker.internet.password();
};

const generateName = () => {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
};

const generateUser = () => {
  return new db.User({
    avatar: generateAvatar(),
    email: generateEmail(),
    password: generatePassword(),
    name: generateName(),
    posts: [],
    comments: [],
  });
};

const generateComment = (postId: mongoose.Types._ObjectId) => {
  const body = generateBody();

  return new db.Comment({
    postId,
    userId: '',
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

const generateSampleSize = (arr: any[]) => {
  const shuffledArr = _.shuffle(arr);
  return _.sampleSize(shuffledArr, generateRandomNumber());
};

export const generatePublications = () =>
  _.times(PUBLICATIONS_AMOUNT, () => {
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
