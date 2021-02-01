import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const usePostsDetailsPage = () => {
    const params = useParams();
    const { fetchPost } = useActions();
  
    useEffect(() => {
      fetchPost(params.id);
    }, []); 
}

export default usePostsDetailsPage