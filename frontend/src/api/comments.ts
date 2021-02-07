import axios from "axios";
import { IComment } from "../types";
import { postsUrl } from "./posts";

const commentsUrl = "/api/comments/";

export const comments = {
  async getComments() {
    const { data } = await axios.get<IComment[]>(commentsUrl);
    return data;
  },
  async getComment(_id: string) {
    const { data } = await axios.get<IComment>(commentsUrl + _id);
    return data;
  },
  addComment(comment: IComment) {
    const { body, postId } = comment;
    axios.post<any>(postsUrl, { body, postId });
  },
  deleteComment(_id: string) {
    axios.delete<string>(commentsUrl + _id);
  },
  updateComment(post: IComment) {
    axios.put<string>(commentsUrl + post._id, post);
  },
};