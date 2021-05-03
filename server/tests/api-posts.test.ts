import request from "supertest";
import db from "../db/models";
import app from "../server";
import { IPostDoc } from "./../db/models/Post";

const post = {
  title: "testing",
  body: "testing",
  image: "testing",
  readingTime: "testing",
  date: "testing",
};

describe("Test /api/posts end points", () => {
  let newPost: IPostDoc;

  beforeAll(async (done) => {
    newPost = new db.Post(post);
    Promise.all([newPost.save()]).then(() => done());
  });

  afterAll(async (done) => {
    await db.Post.deleteMany({});
    done();
  });

  test("Test POST /api/posts", async (done) => {
    const res = await request(app).post("/api/posts").send(post);
    done();
  });

  test("Test GET /api/posts", async (done) => {
    const res = await request(app)
      .get("/api/posts")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    done();
  });

  test("Test GET /api/posts/:id", async (done) => {
    const res = await request(app)
      .get(`/api/posts/${newPost._id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    done();
  });

  test("Test UPDATE /api/posts/:id", async (done) => {
    const res = await request(app)
      .patch(`/api/posts/${newPost._id}`)
      .send({
        title: "testing2",
      })
      .set("Accept", "application/json")
      .expect(200);

    const updatedPost = await db.Post.findById(newPost._id).then(
      (post: any) => {
        expect(post.title).toBe("testing2");
      }
    );

    done();
  });

  test("Test DELETE /api/posts/:id", async (done) => {
    const res = await request(app)
      .delete(`/api/posts/${newPost._id}`)
      .expect(200);
    done();
  });
});
