import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { ICommentDoc } from "../db/models/Comment";
import testDB from "./testDB";

const newComment = {
  postId: "testing",
  comment: {},
  body: "testing",
  date: "testing",
};

describe("tests comments", () => {
  beforeAll(() => testDB());

  afterAll(async () => {
    await mongoose.connection.collections.comments.deleteMany({});
  });

  it("should create a comment", (done) => {
    db.Comment.create(newComment).then((comment: ICommentDoc) => {
      expect(201);
      assert(comment._id !== null);
      assert(comment.postId === newComment.postId);
      assert(comment.body === newComment.body);
      assert(comment.date === newComment.date);
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
    db.Comment.create(newComment).then((comment: ICommentDoc) => {
      db.Comment.findById(comment._id).then(() => {
        expect(200);
        assert(comment._id !== null);
        assert(comment.postId === newComment.postId);
        assert(comment.body === newComment.body);
        assert(comment.date === newComment.date);
        done();
      });
    });
  });

  it("should update comment body", (done) => {
    db.Comment.create(newComment).then((comment: ICommentDoc) => {
      db.Comment.findOneAndUpdate(
        { _id: comment._id },
        { body: "comment2" }
      ).then(() => {
        db.Comment.findById(comment._id).then((comment: any) => {
          expect(200);
          assert(comment.body === "comment2");
          done();
        });
      });
    });
  });

  it("should find one and delete comment", (done) => {
    db.Comment.create(newComment).then((comment: ICommentDoc) => {
      db.Comment.findByIdAndDelete(comment._id).then(() => {
        expect(200);
        expect(comment._id).toBe(comment._id);
        done();
      });
    });
  });
});
