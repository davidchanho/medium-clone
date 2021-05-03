import request from "supertest";
import db from "../db/models";
import app from "../server";
import { ICommentDoc } from "../db/models/Comment";

const comment = {
  postId: "",
  body: "testing",
  date: "testing",
};

describe("Test /api/comments end points", () => {
  let newComment: ICommentDoc;

  beforeAll(async (done) => {
    newComment = new db.Comment(comment);
    Promise.all([newComment.save()]).then(() => done());
  });

  test("Test POST /api/comments", async (done) => {
    const res = await request(app).post("/api/comments").send(comment);
    done();
  });

  test("Test GET /api/comments", async (done) => {
    const res = await request(app)
      .get("/api/comments")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    done();
  });

  test("Test GET /api/comments/:id", async (done) => {
    const res = await request(app)
      .get(`/api/comments/${newComment._id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    done();
  });

  test("Test UPDATE /api/comments/:id", async (done) => {
    const res = await request(app)
      .patch(`/api/comments/${newComment._id}`)
      .send({
        body: "testing2",
      })
      .set("Accept", "application/json")
      .expect(200);

    const updatedComment = await db.Comment.findById(newComment._id).then(
      (comment: any) => {
        expect(comment.body).toBe("testing2");
      }
    );

    done();
  });

  test("Test DELETE /api/comments/:id", async (done) => {
    const res = await request(app)
      .delete(`/api/comments/${newComment._id}`)
      .expect(200);
    done();
  });
});
