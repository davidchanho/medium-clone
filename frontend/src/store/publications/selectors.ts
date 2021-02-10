import { RootState } from "../store";

export const publicationSelectors = (state: RootState) => {
  return state.publications;
};
