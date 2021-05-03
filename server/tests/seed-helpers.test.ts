import "jest-chain";
import "jest-extended";
import mongoose from "mongoose";
import {
    calcReadTime,
  generateBody,
  generateDate,
  generateId,
  generatePhoto,
  generateRandomNumber,
  generateSampleSize,
  generateTopicName,
} from "./../db/seed/helpers";

describe("tests generateRandomNumber", () => {
  it("should return a number", () => {
    const num = generateRandomNumber();
    expect(num).toBeNumber();
  });
});

describe("tests generateId", () => {
  it("should return a mongodb id", () => {
    const id = generateId();
    expect(id).toBeInstanceOf(mongoose.Types.ObjectId);
  });
});

describe("tests generateDate", () => {
  it("should return a Date", () => {
    const date = generateDate();
    expect(date).toBeDate();
  });
});

describe("tests calcReadTime", () => {
  it("should return a string", () => {
    const readingTime = calcReadTime(generateBody());
    expect(readingTime).toBeString();
  });
});

describe("tests generatePhoto", () => {
  it("should return a string", () => {
    const photo = generatePhoto(10, 10);
    expect(photo).toBeString();
  });
});

describe("tests generateBody", () => {
  it("should return a string", () => {
    const body = generateBody();
    expect(body).toBeString();
  });
});

describe("tests generateTopicName", () => {
  it("should return a string", () => {
    const topic = generateTopicName();
    expect(topic).toBeString();
  });
});

describe("tests generateSampleSize", () => {
  it("should return a string", () => {
    const sample = generateSampleSize(["a", "b", "c"]);
    expect(sample).toBeArray().toBeArrayOfSize(3).not.toBeEmpty();
  });
});
