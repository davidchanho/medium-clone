import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { ICommentDoc } from "../db/models/Comment";
import testDB from "./testDB";

const comment = {
  postId: "testing",
  body: "testing",
  date: "testing",
};

describe("tests comments", () => {
  let newComment: ICommentDoc;

  beforeAll(async (done) => {
    testDB();
    newComment = new db.Comment(comment);
    Promise.all([newComment.save()]).then(() => done());
  });

  afterAll(async () => {
    await mongoose.connection.collections.comments.deleteMany({});
  });

  it("should create a comment", (done) => {
    db.Comment.create(newComment).then((comment: ICommentDoc) => {
      expect(201);
      assert(comment._id !== null);
      assert(comment.postId === comment.postId);
      assert(comment.body === comment.body);
      assert(comment.date === comment.date);
      done();
    });
  });

  it("should find all comments", (done) => {
    db.Comment.find({}).then((comments: ICommentDoc[]) => {
      expect(200);
      assert(comments.length === 1);
      done();
    });
  });

  it("should find comment by id", (done) => {
    db.Comment.findById(newComment._id).then(() => {
      expect(200);
      assert(newComment._id !== null);
      assert(newComment.postId === comment.postId);
      assert(newComment.body === comment.body);
      assert(newComment.date === comment.date);
      done();
    });
  });

  it("should update comment body", (done) => {
    db.Comment.findOneAndUpdate(
      { _id: newComment._id },
      { body: "comment2" }
    ).then(() => {
      db.Comment.findById(newComment._id).then((comment: any) => {
        expect(200);
        assert(comment.body === "comment2");
        done();
      });
    });
  });

  it("should find one and delete comment", (done) => {
    db.Comment.findOneAndDelete({ _id: newComment._id }).then(() => {
      db.Comment.findById(newComment._id).then((comment: any) => {
        expect(200);
        expect(comment).toBeNull();
        done();
      });
    });
  });
});
