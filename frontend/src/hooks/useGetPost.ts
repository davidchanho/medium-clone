import { useNavigate } from "react-router-dom";
import { IPost } from "../types";

export const useGetPost = (post: IPost) => {
  const navigate = useNavigate();

  const onGetPost = () => {
    navigate(`/${post._id}`);
  };

  return { onGetPost };
};
