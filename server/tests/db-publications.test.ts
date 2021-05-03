import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { IPublicationDoc } from "../db/models/Publication";
import testDB from "./testDB";

const publication = {
  name: "testing",
  icon: "testing",
  topic: "testing",
};

describe("tests publications", () => {
  let newPublication: IPublicationDoc;

  beforeAll(async (done) => {
    testDB();
    newPublication = new db.Publication(publication);
    Promise.all([newPublication.save()]).then(() => done());
  });

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
      expect(200);
      assert(publications.length === 1);
      done();
    });
  });

  it("should find publication by id", (done) => {
    db.Publication.findById(newPublication._id).then(() => {
      expect(200);
      assert(newPublication._id !== null);
      assert(publication.name === newPublication.name);
      assert(publication.icon === newPublication.icon);
      assert(publication.topic === newPublication.topic);
      done();
    });
  });

  it("should update publication name", (done) => {
    db.Publication.findOneAndUpdate(
      { _id: newPublication._id },
      { name: "publication2" }
    ).then(() => {
      db.Publication.findById(newPublication._id).then((publication: any) => {
        expect(200);
        assert(publication.name === "publication2");
        done();
      });
    });
  });

  it("should find one and delete publication", (done) => {
    db.Publication.findOneAndDelete({ _id: newPublication._id }).then(() => {
      db.Publication.findById(newPublication._id).then((publication: any) => {
        expect(200);
        expect(publication).toBeNull();
        done();
      });
    });
  });
});
