import { useNavigate } from "react-router-dom";
import { PostProps } from "./../types/index";

export const useGetPost = (post: PostProps) => {
  const navigate = useNavigate();

  const onGetPost = () => {
    navigate(`/${post?._id}`);
  };

  return { onGetPost };
};
