import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { IUserDoc } from "../db/models/User";
import testDB from "./testDB";

const newUser = {
  avatar: "testing",
  photo: "testing",
  email: "testing",
  password: "testing",
  name: "testing",
  about: "testing",
  publications: [],
  followers: [],
  bookmarks: [],
  posts: [],
  comments: [],
};

describe("tests users", () => {
  beforeAll(() => testDB());

  afterAll(async () => {
    await mongoose.connection.collections.users.deleteMany({});
  });

  it("should create a user", (done) => {
    db.User.create(newUser).then((user: IUserDoc) => {
      expect(201);
      assert(user._id !== null);
      assert(user.avatar === newUser.avatar);
      assert(user.photo === newUser.photo);
      assert(user.email === newUser.email);
      assert(user.password === newUser.password);
      assert(user.name === newUser.name);
      assert(user.about === newUser.about);
      done();
    });
  });

  it("should find all users", (done) => {
    db.User.find({}).then((users: IUserDoc[]) => {
      assert(users.length === 1);
      done();
    });
  });

  it("should find user by id", (done) => {
    db.User.create(newUser).then((user: IUserDoc) => {
      db.User.findById(user._id).then(() => {
        expect(200);
        assert(user._id !== null);
        assert(user.avatar === newUser.avatar);
        assert(user.photo === newUser.photo);
        assert(user.email === newUser.email);
        assert(user.password === newUser.password);
        assert(user.name === newUser.name);
        assert(user.about === newUser.about);
        done();
      });
    });
  });

  it("should update user name", (done) => {
    db.User.create(newUser).then((user: IUserDoc) => {
      db.User.findOneAndUpdate({ _id: user._id }, { name: "user2" }).then(
        () => {
          db.User.findById(user._id).then((user: any) => {
            expect(200);
            assert(user.name === "user2");
            done();
          });
        }
      );
    });
  });

  it("should find one and delete user", (done) => {
    db.User.create(newUser).then((user: IUserDoc) => {
      db.User.findByIdAndDelete(user._id).then(() => {
        expect(200);
        expect(user._id).toBe(user._id);
        done();
      });
    });
  });
});
