import { ITopic } from ".";

export interface IPublication {
  _id: string;
  name: string;
  icon: string;
  topics: ITopic[];
}
