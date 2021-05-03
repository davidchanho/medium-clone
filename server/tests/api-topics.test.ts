import request from "supertest";
import db from "../db/models";
import { ITopicDoc } from "../db/models/Topic";
import app from "../server";

const topic = {
  name: "testing",
};

describe("Test /api/topics end points", () => {
  let newTopic: ITopicDoc;

  beforeAll(async (done) => {
    newTopic = new db.Topic(topic);
    Promise.all([newTopic.save()]).then(() => done());
  });

  test("Test GET /api/topics", async (done) => {
    const res = await request(app)
      .get("/api/topics")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    done();
  });

  test("Test GET /api/topics/:id", async (done) => {
    const res = await request(app)
      .get(`/api/topics/${newTopic._id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    done();
  });
});
