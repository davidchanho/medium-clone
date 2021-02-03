import { RootState } from "../store";

export const postSelectors = (state: RootState) => state.posts;
export const commentSelectors = (state: RootState) => state.comments;
export const publicationSelectors = (state: RootState) => state.publications;
