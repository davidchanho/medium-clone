import axios from "axios";
import { IPublication } from "./types";

export const publicationsUrl = "/api/publications/";

export const publications = {
  async getPublications() {
    const { data } = await axios.get<IPublication[]>(publicationsUrl);
    return data;
  },
  async getPublication(_id: string) {
    const { data } = await axios.get<IPublication>(publicationsUrl + _id);
    return data;
  },
};
