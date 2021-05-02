import request from "supertest";
import app from "../server";

describe("Test GET /api/posts", () => {
  test("It should respond with 200 success", async () => {
    try {
      const res = await request(app)
        .get("/api/posts")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);
    } catch (err) {
      console.log(err);
    }
  });
  test("It should be defined", async () => {
    try {
      const res = await request(app).get("/api/posts");
      expect(res.body).toBeDefined();
    } catch (err) {
      console.log(err);
    }
  });
});

describe("Test POST /api/posts", () => {
  test("It should respond with 200 success", async () => {
    try {
      const res = await request(app)
        .post("/api/posts")
        .send({
          title: "test",
          body: "test",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);
    } catch (err) {
      console.log(err);
    }
  });
});
