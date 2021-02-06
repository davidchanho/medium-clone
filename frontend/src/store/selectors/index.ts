import { RootState } from "../store";

export const postSelectors = (state: RootState) => {
  return state.posts;
};

export const commentSelectors = (state: RootState) => {
  return state.comments;
};

export const publicationSelectors = (state: RootState) => {
  return state.publications;
};
