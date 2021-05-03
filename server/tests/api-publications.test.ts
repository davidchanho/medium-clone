import request from "supertest";
import db from "../db/models";
import { IPublicationDoc } from "../db/models/Publication";
import app from "../server";

const publication = {
  name: "testing",
  icon: "testing",
};

describe("Test /api/publications end points", () => {
  let newPublication: IPublicationDoc;

  beforeAll(async (done) => {
    newPublication = new db.Publication(publication);
    Promise.all([newPublication.save()]).then(() => done());
  });

  test("Test GET /api/publications", async (done) => {
    const res = await request(app)
      .get("/api/publications")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    done();
  });

  test("Test GET /api/publications/:id", async (done) => {
    const res = await request(app)
      .get(`/api/publications/${newPublication._id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    done();
  });
});
