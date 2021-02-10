import { RootState } from "../store";

export const userSelectors = (state: RootState) => {
  return state.users;
};
