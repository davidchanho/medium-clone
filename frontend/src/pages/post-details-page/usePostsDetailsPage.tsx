import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const usePostsDetailsPage = () => {
  const params = useParams();
  const { getPost } = useActions();

  useEffect(() => {
    getPost(params.id);
  }, [getPost, params.id]);
};

export default usePostsDetailsPage;
