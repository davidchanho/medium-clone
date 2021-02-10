import * as redis from "redis";
const mongoose = require("mongoose");
const util = require("util");

const redisUrl = "redis//127.0.01:6379";
const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = async function () {
  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  const cacheValue: any = client.get(key);

  if (cacheValue) {
    console.log(cacheValue);
    return JSON.parse(cacheValue);
  }

  const result = await exec.apply(this, arguments);

  client.set(key, JSON.stringify(result));

  return result;
};
