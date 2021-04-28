import { RootState } from ".";

export const commentSelectors = (state: RootState) => {
  return state.comments;
};
export const postSelectors = (state: RootState) => {
  return state.posts;
};
export const publicationSelectors = (state: RootState) => {
  return state.publications;
};
export const userSelectors = (state: RootState) => {
  return state.users;
};
