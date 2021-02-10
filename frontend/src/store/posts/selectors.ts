import { RootState } from "../store";

export const postSelectors = (state: RootState) => {
  return state.posts;
};
