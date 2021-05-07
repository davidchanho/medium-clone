import assert from "assert";
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
    assert(typeof num === "number");
    assert(num >= 3);
    assert(num <= 7);
  });
});

describe("tests generateId", () => {
  it("should return a mongodb id", () => {
    const id = generateId();
    assert(typeof id === "object");
  });
});

describe("tests generateDate", () => {
  it("should be defined", () => {
    const date = generateDate();
    assert(typeof date !== "undefined");
  });
});

describe("tests calcReadTime", () => {
  it("should return a string", () => {
    const readingTime = calcReadTime(generateBody());
    assert(typeof readingTime === "string");
  });
});

describe("tests generatePhoto", () => {
  it("should return a string", () => {
    const photo = generatePhoto(10, 10);
    assert(typeof photo === "string");
  });
});

describe("tests generateBody", () => {
  it("should return a string", () => {
    const body = generateBody();
    assert(typeof body === "string");
  });
});

describe("tests generateTopicName", () => {
  it("should return a string", () => {
    const topic = generateTopicName();
    assert(typeof topic === "string");
  });
});

describe("tests generateSampleSize", () => {
  it("should return a string", () => {
    const sample = generateSampleSize(["a", "b", "c"]);
    assert(typeof sample === "object");
    assert(sample.length === 3);
  });
});
