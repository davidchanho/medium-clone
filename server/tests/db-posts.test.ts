import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { IPostDoc } from "../db/models/Post";
import testDB from "./testDB";

const post = {
  title: "testing",
  body: "testing",
  image: "testing",
  readingTime: "testing",
  date: "testing",
};

describe("tests posts", () => {
  let newPost: IPostDoc;

  beforeAll(async (done) => {
    testDB();
    newPost = new db.Post(post);
    Promise.all([newPost.save()]).then(() => done());
  });

  afterAll(async () => {
    await mongoose.connection.collections.posts.deleteMany({});
  });

  it("should create a post", (done) => {
    db.Post.create(newPost).then((post: IPostDoc) => {
      expect(201);
      assert(post._id !== null);
      assert(post.title === newPost.title);
      assert(post.body === newPost.body);
      assert(post.image === newPost.image);
      assert(post.readingTime === newPost.readingTime);
      assert(post.date === newPost.date);
      done();
    });
  });

  it("should find all posts", (done) => {
    db.Post.find({}).then((posts: IPostDoc[]) => {
      expect(200);
      assert(posts.length === 1);
      done();
    });
  });

  it("should find post by id", (done) => {
    db.Post.findById(newPost._id).then(() => {
      expect(200);
      assert(newPost._id !== null);
      assert(newPost.title === post.title);
      assert(newPost.body === post.body);
      assert(newPost.image === post.image);
      assert(newPost.readingTime === post.readingTime);
      assert(newPost.date === post.date);
      done();
    });
  });

  it("should update post title", (done) => {
    db.Post.findOneAndUpdate({ _id: newPost._id }, { title: "newpost" }).then(
      () => {
        db.Post.findById(newPost._id).then((post: any) => {
          expect(200);
          assert(post.title === "newpost");
          done();
        });
      }
    );
  });

  it("should find one and delete post", (done) => {
    db.Post.findOneAndDelete({ _id: newPost._id }).then(() => {
      db.Post.findById(newPost._id).then((post: any) => {
        expect(200);
        expect(post).toBeNull();
        done();
      });
    });
  });
});
