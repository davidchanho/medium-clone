import { userSelectors } from "../store";
import { useSelector } from "./useSelector";

export const useFindUserbyPost = (userId: string) => {
  const { users } = useSelector(userSelectors);

  const index = users.findIndex((user) => {
    return user._id === userId;
  });

  if (!users[index]) {
    return null;
  }

  return users[index];
};
