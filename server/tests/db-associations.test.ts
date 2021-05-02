import db from "../db/models";
import { ICommentDoc } from "../db/models/Comment";
import { IPostDoc } from "../db/models/Post";
import { IPublicationDoc } from "../db/models/Publication";
import { ITopicDoc } from "../db/models/Topic";
import { IUserDoc } from "../db/models/User";
import testDB from "./testDB";

const user = {
  avatar: "testing",
  photo: "testing",
  email: "testing",
  password: "testing",
  name: "testing",
  about: "testing",
  publications: [],
  followers: [],
  bookmarks: [],
  posts: [],
  comments: [],
};

const follower = {
  avatar: "follower",
  photo: "follower",
  email: "follower",
  password: "follower",
  name: "follower",
  about: "follower",
  publications: [],
  followers: [],
  bookmarks: [],
  posts: [],
  comments: [],
};

const post = {
  publication: {},
  user: {},
  title: "testing",
  body: "testing",
  image: "testing",
  readingTime: "testing",
  date: "testing",
  comments: [],
};

const publication = {
  name: "testing",
  icon: "testing",
  posts: [],
  topic: {},
};

const comment = {
  postId: "",
  user: {},
  body: "testing",
  date: "testing",
};

const topic = {
  name: "testing",
};

describe("tests association", () => {
  let newPost: IPostDoc,
    newPublication: IPublicationDoc,
    newComment: ICommentDoc,
    newTopic: ITopicDoc,
    newUser: IUserDoc,
    newFollower: IUserDoc;

  beforeAll((done) => {
    testDB();

    newUser = new db.User(user);

    newFollower = new db.User(follower);

    newPost = new db.Post(post);

    newTopic = new db.Topic(topic);

    newPublication = new db.Publication(publication);

    newComment = new db.Comment(comment);

    newUser.publications.push(newPublication);
    newUser.followers.push(newFollower);
    newUser.posts.push(newPost);
    newUser.bookmarks.push(newPost);
    newUser.comments.push(newComment);

    newPost.publication = newPublication;
    newPost.user = newUser;
    newPost.comments.push(newComment);

    newPublication.topic = newTopic.name;
    newPublication.posts.push(newPost);

    newComment.postId = newPost._id;
    newComment.user = newUser;

    Promise.all([
      newTopic.save(),
      newPublication.save(),
      newComment.save(),
      newPost.save(),
      newUser.save(),
      newFollower.save(),
    ]).then(() => done());
  });

  it("should check if publication exists", (done) => {
    db.Publication.findById(newPublication._id).then(() => {
      expect(newPublication.id).toBeDefined();
      expect(newPublication.name).toBe(newPublication.name);
      expect(newPublication.icon).toBe(newPublication.icon);
      done();
    });
  });

  it("should check if post exists in publication", (done) => {
    db.Publication.findById(newPublication._id).then(() => {
      expect(newPublication.posts[0].id).toBeDefined();
      expect(newPublication.posts[0].title).toBe(newPost.title);
      expect(newPublication.posts[0].body).toBe(newPost.body);
      expect(newPublication.posts[0].image).toBe(newPost.image);
      expect(newPublication.posts[0].readingTime).toBe(newPost.readingTime);
      expect(newPublication.posts[0].date).toBe(newPost.date);
      done();
    });
  });

  it("should check if topic exists in publication", (done) => {
    db.Publication.findById(newPublication._id).then(() => {
      console.log(newPublication.topic);
      expect(newPublication.topic).toBe(newTopic.name);
      done();
    });
  });

  it("should check if publication exists in post", (done) => {
    db.Post.findById(newPost._id).then(() => {
      expect(newPost.id).toBeDefined();
      expect(newPost.title).toBe(newPost.title);
      expect(newPost.body).toBe(newPost.body);
      expect(newPost.publication.name).toBe(newPublication.name);
      expect(newPost.publication.icon).toBe(newPublication.icon);
      done();
    });
  });

  it("should check if comment exists in post", (done) => {
    db.Post.findById(newPost._id).then(() => {
      expect(newPost.id).toBeDefined();
      expect(newPost.id).toBe(newComment.postId);
      expect(newPost.comments[0].date).toBe(newComment.date);
      expect(newPost.comments[0].body).toBe(newComment.body);
      done();
    });
  });

  it("should check if follower exists in user", (done) => {
    db.User.findById(newUser._id).then(() => {
      expect(newUser.id).toBeDefined();
      expect(newUser.followers[0].id).toBe(newFollower.id);
      expect(newUser.followers[0].avatar).toBe(newFollower.avatar);
      expect(newUser.followers[0].email).toBe(newFollower.email);
      expect(newUser.followers[0].password).toBe(newFollower.password);
      expect(newUser.followers[0].photo).toBe(newFollower.photo);
      expect(newUser.followers[0].name).toBe(newFollower.name);
      expect(newUser.followers[0].about).toBe(newFollower.about);
      done();
    });
  });

  it("should check if publication exists in user", (done) => {
    db.User.findById(newUser._id).then(() => {
      expect(newUser.id).toBeDefined();
      expect(newUser.publications[0]._id).toBe(newPublication._id);
      expect(newUser.publications[0].name).toBe(newPublication.name);
      expect(newUser.publications[0].icon).toBe(newPublication.icon);
      done();
    });
  });

  it("should check if post exists in user", (done) => {
    db.User.findById(newUser._id).then(() => {
      expect(newUser.id).toBeDefined();
      expect(newUser.posts[0]._id).toBe(newPost._id);
      expect(newUser.posts[0].body).toBe(newPost.body);
      expect(newUser.posts[0].title).toBe(newPost.title);
      expect(newUser.posts[0].image).toBe(newPost.image);
      expect(newUser.posts[0].readingTime).toBe(newPost.readingTime);
      expect(newUser.posts[0].date).toBe(newPost.date);
      done();
    });
  });

  it("should check if bookmark exists in user", (done) => {
    db.User.findById(newUser._id).then(() => {
      expect(newUser.id).toBeDefined();
      expect(newUser.bookmarks[0]._id).toBe(newPost._id);
      expect(newUser.bookmarks[0].body).toBe(newPost.body);
      expect(newUser.bookmarks[0].title).toBe(newPost.title);
      expect(newUser.bookmarks[0].image).toBe(newPost.image);
      expect(newUser.bookmarks[0].readingTime).toBe(newPost.readingTime);
      expect(newUser.bookmarks[0].date).toBe(newPost.date);
      done();
    });
  });

  it("should check if comment exists in user", (done) => {
    db.User.findById(newUser._id).then(() => {
      expect(newUser.id).toBeDefined();
      expect(newUser.posts[0].id).toBe(newComment.postId);
      expect(newUser.comments[0].date).toBe(newComment.date);
      expect(newUser.comments[0].body).toBe(newComment.body);
      done();
    });
  });
});
