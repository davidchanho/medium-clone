export const testUser = {
  _id: "test",
  avatar: "test",
  photo: "test",
  email: "test",
  name: "test",
  about: "test",
  following: {
    users: [],
    publications: [],
  },
  bookmarks: [],
  posts: [],
  comments: [],
};

export const testPublication = {
  _id: "test",
  name: "test",
  icon: "test",
  topic: [{ name: "test" }],
};

export const testPost = {
  id: "test",
  publication: testPublication,
  user: testUser,
  title: "test",
  body: "test",
  image: "test",
  readingTime: "test",
  date: "test",
  comments: [],
};
