import axios from "axios";
import { IPublication } from "../types";

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
  addPublication(publication: IPublication) {
    axios.post<any>(publicationsUrl, publication.name);
  },
  deletePublication(_id: string) {
    axios.delete<string>(publicationsUrl + _id);
  },
  updatePublication(post: IPublication) {
    axios.put<string>(publicationsUrl + post._id, post);
  },
};
