import { RootState } from "../store";

export const commentSelectors = (state: RootState) => {
  return state.comments;
};
