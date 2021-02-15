import faker from "faker";
import _ from "lodash";
import mongoose from "mongoose";

export const generateRandomNumber = () => {
  return _.random(3, 7);
};

export const generateId = () => {
  return new mongoose.Types.ObjectId();
};

export const generateDate = () => {
  const today = new Date().toDateString();
  return faker.date.between("2020-01-01", today);
};

export const calcReadTime = (body: string) => {
  const wordCount = body.split(" ").length;
  const wordsPerMinute = 275;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

export const generatePhoto = (width: number, height: number) => {
  return `${faker.image.animals(width, height)}?random=${Math.round(
    Math.random() * 1000
  )}`;
};

export const generateBody = () => {
  return _.capitalize(faker.lorem.paragraph(5));
};

export const generateSampleSize = (arr: any[]) => {
  const shuffledArr = _.shuffle(arr);
  return _.sampleSize(shuffledArr, generateRandomNumber());
};
