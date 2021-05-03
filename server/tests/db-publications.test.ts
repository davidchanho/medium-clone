import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { IPublicationDoc } from "../db/models/Publication";
import testDB from "./testDB";

const newPublication = {
  name: "testing",
  icon: "testing",
  posts: [],
  topic: "testing",
};

describe("tests publications", () => {
  beforeAll(() => testDB());

  afterAll(async () => {
    await mongoose.connection.collections.publications.deleteMany({});
  });

  it("should create a publication", (done) => {
    db.Publication.create(newPublication).then(
      (publication: IPublicationDoc) => {
        expect(201);
        assert(publication._id !== null);
        assert(publication.name === newPublication.name);
        assert(publication.icon === newPublication.icon);
        assert(publication.topic === newPublication.topic);
        done();
      }
    );
  });

  it("should find all publications", (done) => {
    db.Publication.find({}).then((publications: IPublicationDoc[]) => {
      assert(publications.length === 1);
      done();
    });
  });

  it("should find publication by id", (done) => {
    db.Publication.create(newPublication).then(
      (publication: IPublicationDoc) => {
        db.Publication.findById(publication._id).then(() => {
          expect(200);
          assert(publication._id !== null);
          assert(publication.name === newPublication.name);
          assert(publication.icon === newPublication.icon);
          assert(publication.topic === newPublication.topic);
          done();
        });
      }
    );
  });

  it("should update publication name", (done) => {
    db.Publication.create(newPublication).then(
      (publication: IPublicationDoc) => {
        db.Publication.findOneAndUpdate(
          { _id: publication._id },
          { name: "publication2" }
        ).then(() => {
          db.Publication.findById(publication._id).then((publication: any) => {
            expect(200);
            assert(publication.name === "publication2");
            done();
          });
        });
      }
    );
  });

  it("should find one and delete publication", (done) => {
    db.Publication.create(newPublication).then(
      (publication: IPublicationDoc) => {
        db.Publication.findByIdAndDelete(publication._id).then(() => {
          expect(200);
          expect(publication._id).toBe(publication._id);
          done();
        });
      }
    );
  });
});
