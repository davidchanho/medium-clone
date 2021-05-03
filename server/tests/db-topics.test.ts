import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { ITopicDoc } from "../db/models/Topic";
import testDB from "./testDB";

const newTopic = new db.Topic({
  name: "testing",
});

describe("tests topics", () => {
  beforeAll(async () => testDB());

  afterAll(async () => {
    await mongoose.connection.collections.topics.deleteMany({});
  });

  it("should create a topic", (done) => {
    db.Topic.create(newTopic).then((topic: ITopicDoc) => {
      expect(201);
      assert(topic._id !== null);
      assert(topic.name === newTopic.name);
      done();
    });
  });

  it("should find all topics", (done) => {
    db.Topic.find({}).then((topics: ITopicDoc[]) => {
      assert(topics.length !== 0);
      done();
    });
  });

  it("should find topic by id", (done) => {
    db.Topic.findById(newTopic._id).then(() => {
      expect(200);
      assert(newTopic._id !== null);
      assert(newTopic.name === newTopic.name);
      done();
    });
  });
});
