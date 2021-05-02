import assert from "assert";
import db from "../db/models";
import { IPostDoc } from "../db/models/Post";
import testDB from "./testDB";

const topic = new db.Topic({
  name: "test",
});

const user = new db.User({
  avatar: "test",
  photo: "test",
  email: "test",
  password: "test",
  name: "test",
  about: "test",
  publications: [],
  followers: [],
  bookmarks: [],
  posts: [],
  comments: [],
});

const publication = new db.Publication({
  name: "test",
  icon: "test",
  posts: [],
  topic: {},
});

const comment = new db.Comment({
  postId: "test",
  user: {},
  body: "test",
  date: "test",
});

const post = new db.Post({
  publication: { name: "", icon: "", posts: [], topic },
  user,
  title: "test",
  body: "test",
  image: "test",
  readingTime: "test",
  date: "test",
  comments: [],
});

describe("tests posts", () => {
  beforeAll(() => testDB());

  it("should create a post", (done) => {
    db.Post.create(post).then((post: IPostDoc) => {
      expect(201);
      assert(post._id !== null);
      assert(post.title === "post");
      assert(post.completed === false);
      done();
    });
  });

  it("should find all posts", (done) => {
    db.Post.find({}).then((posts: IPostDoc[]) => {
      assert(posts.length === 1);
      done();
    });
  });

  it("should find post by id", (done) => {
    db.Post.findById(post._id).then(() => {
      expect(200);
      assert(post._id !== null);
      assert(post.title === "post");
      assert(post.completed === false);
      done();
    });
  });

  it("should update post title", (done) => {
    db.Post.findOneAndUpdate({ _id: post._id }, { title: "post2" }).then(() => {
      db.Post.findById(post._id).then((post: IPostDoc) => {
        expect(200);
        assert(post.title === "post2");
        done();
      });
    });
  });

  it("should update post complete", (done) => {
    db.Post.findOneAndUpdate({ _id: post._id }, { completed: true }).then(
      () => {
        db.Post.findById(post._id).then((post: IPostDoc) => {
          expect(200);
          assert(post.completed === true);
          done();
        });
      }
    );
  });

  it("should find one and delete post", (done) => {
    db.Post.findById(post._id).then((post: IPostDoc) => {
      expect(200);
      post.remove();
      expect(post._id).toBe(post._id);
      done();
    });
  });
});
