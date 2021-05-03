import assert from "assert";
import mongoose from "mongoose";
import db from "../db/models";
import { IUserDoc } from "../db/models/User";
import testDB from "./testDB";

const user = {
  avatar: "testing",
  photo: "testing",
  email: "testing",
  password: "testing",
  name: "testing",
  about: "testing",
};

describe("tests users", () => {
  let newUser: IUserDoc;

  beforeAll(async (done) => {
    testDB();
    newUser = new db.User(user);
    Promise.all([newUser.save()]).then(() => done());
  });

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
      expect(200);
      assert(users.length === 1);
      done();
    });
  });

  it("should find user by id", (done) => {
    db.User.findById(newUser._id).then(() => {
      expect(200);
      assert(newUser._id !== null);
      assert(newUser.avatar === user.avatar);
      assert(newUser.photo === user.photo);
      assert(newUser.email === user.email);
      assert(newUser.password === user.password);
      assert(newUser.name === user.name);
      assert(newUser.about === user.about);
      done();
    });
  });

  it("should update user name", (done) => {
    db.User.findOneAndUpdate({ _id: newUser._id }, { name: "user2" }).then(
      () => {
        db.User.findById(newUser._id).then((user: any) => {
          expect(200);
          assert(user.name === "user2");
          done();
        });
      }
    );
  });

  it("should find one and delete user", (done) => {
    db.User.findOneAndDelete({ _id: newUser._id }).then(() => {
      db.User.findById(newUser._id).then((user: any) => {
        expect(200);
        expect(user).toBeNull();
        done();
      });
    });
  });
});
