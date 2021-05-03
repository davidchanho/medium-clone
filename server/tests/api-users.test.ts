import request from "supertest";
import db from "../db/models";
import app from "../server";
import { IUserDoc } from "../db/models/User";

const user = {
  avatar: "testing",
  photo: "testing",
  email: "testing",
  password: "testing",
  name: "testing",
  about: "testing",
};

describe("Test /api/users end points", () => {
  let newUser: IUserDoc;

  beforeAll(async (done) => {
    newUser = new db.User(user);
    Promise.all([newUser.save()]).then(() => done());
  });

  test("Test POST /api/users", async (done) => {
    const res = await request(app).post("/api/users").send(user);
    done();
  });

  test("Test GET /api/users", async (done) => {
    const res = await request(app)
      .get("/api/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    done();
  });

  test("Test GET /api/users/:id", async (done) => {
    const res = await request(app)
      .get(`/api/users/${newUser._id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    done();
  });

  test("Test UPDATE /api/users/:id", async (done) => {
    const res = await request(app)
      .patch(`/api/users/${newUser._id}`)
      .send({
        name: "testing2",
      })
      .set("Accept", "application/json")
      .expect(200);

    const updatedUser = await db.User.findById(newUser._id).then(
      (user: any) => {
        expect(user.name).toBe("testing2");
      }
    );

    done();
  });

  test("Test DELETE /api/users/:id", async (done) => {
    const res = await request(app)
      .delete(`/api/users/${newUser._id}`)
      .expect(200);
    done();
  });
});
