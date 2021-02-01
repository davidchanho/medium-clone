import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";

export const usePostsPage = () => {
    const { fetchPosts } = useActions();

    useEffect(() => {
      fetchPosts();
    }, []);
  
}