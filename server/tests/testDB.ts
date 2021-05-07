import mongoose from "mongoose";

const testDB = async () => {
  await mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      if (error.message === "ns not found") return;

      if (error.message.includes("a background operation is currently running"))
        return;

      console.log(error.message);
    }
  }
}

afterAll(async () => {
  await dropAllCollections();
  await mongoose.connection.close();
});

export default testDB;
