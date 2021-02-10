import axios from "axios";
import { IUser } from "./types";

export const usersUrl = "/api/users/";

export const users = {
  async getUsers() {
    const { data } = await axios.get<IUser[]>(usersUrl);
    return data;
  },
  async getUser(_id: string) {
    const { data } = await axios.get<IUser>(usersUrl + _id);
    return data;
  },
  addUser(user: IUser) {
    axios.post<any>(usersUrl, user.name);
  },
  deleteUser(_id: string) {
    axios.delete<string>(usersUrl + _id);
  },
  updateUser(post: IUser) {
    axios.put<string>(usersUrl + post._id, post);
  },
};
