const names = ["a", "b", "c"];
import { getObjectId, Seeder } from "mongo-seeding";
import path from "path";

export default names.map((name) => ({
  name,
  _id: getObjectId(name),
}));

const config = {
  database: {
    name: "medium",
  },
  dropDatabase: true,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve("./mydb/data-import"),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  }
);
seeder
  .import(collections)
  .then(() => {
    console.log("Success");
  })
  .catch((err: any) => {
    console.log("Error", err);
  });
