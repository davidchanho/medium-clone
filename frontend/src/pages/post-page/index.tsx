import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";

function PostPage() {
  const params = useParams();
  const { fetchPost } = useActions();
  const { post, loading, error } = useSelector(postSelectors);

  useEffect(() => {
    fetchPost(params.id);
  }, []);

  const renderPost = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>bummer...</div>;
    }

    return (
      <div>
        {post?.title} {post?.body}
      </div>
    );
  };

  return <div>{renderPost()}</div>;
}

export default PostPage;
