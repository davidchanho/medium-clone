import { IComment, IPost, IUser } from "../types";

const commentsUrl = "/api/comments/";
const postsUrl = "/api/posts/";
const publicationsUrl = "/api/publications/";
const usersUrl = "/api/users/";
const topicsUrl = "/api/topics/";

async function postData(url = "", data = {}) {
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("Success:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

async function getData(url = "") {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "same-origin",
    });
    console.log("Success", response);
    return response.json();
  } catch (err) {
    console.error("Error:", err);
  }
}

async function deleteData(url = "") {
  try {
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Success");
  } catch (err) {
    console.error("Error:", err);
  }
}

async function updateData(url = "", data = {}) {
  try {
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("Success");
  } catch (err) {
    console.error("Error:", err);
  }
}

const API = {
  async getComments() {
    const data = await getData(commentsUrl);
    return data;
  },
  async getComment(_id: string) {
    const data = await getData(commentsUrl + _id);
    return data;
  },
  addComment(comment: IComment) {
    postData(commentsUrl, comment);
  },
  deleteComment(_id: string) {
    deleteData(commentsUrl + _id);
  },
  updateComment(comment: IComment) {
    updateData(commentsUrl + comment._id, comment);
  },

  async getPosts() {
    const data = await getData(postsUrl);
    return data;
  },
  async getPost(_id: string) {
    const data = await getData(postsUrl + _id);
    return data;
  },
  addPost(post: IPost) {
    postData(postsUrl, post);
  },
  updatePost(post: IPost) {
    updateData(postsUrl + post._id, post);
  },

  async getPublications() {
    const data = await getData(publicationsUrl);
    return data;
  },
  async getPublication(_id: string) {
    const data = await getData(publicationsUrl + _id);
    return data;
  },

  async getTopics() {
    const data = await getData(topicsUrl);
    return data;
  },

  async getUsers() {
    const data = await getData(usersUrl);
    return data;
  },
  async getUser(_id: string) {
    const data = await getData(usersUrl + _id);
    return data;
  },
  addUser(user: IUser) {
    postData(usersUrl, user);
  },
  deleteUser(_id: string) {
    deleteData(usersUrl + _id);
  },
  updateUser(user: IUser) {
    updateData(usersUrl + user._id, user);
  },
};

export default API;
