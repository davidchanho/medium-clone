import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import DetailsBar from "../../components/details-bar";
import Footer from "../../components/footer";
import PostDetails from "../../components/post-details";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";

function PostDetailsPage() {
  const params = useParams();
  const { getPost } = useActions();
  const { post } = useSelector(postSelectors);

  useEffect(() => {
    getPost(params.id);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{post?.title}</title>
        <meta name="description" content={post?.title} />
      </Helmet>

      <section>
        <Row>
          <Col xs={0}>
            <DetailsBar />
          </Col>
          <Col xs={12}>
            <PostDetails />
          </Col>
        </Row>
      </section>

      <Footer />
    </div>
  );
}

export default PostDetailsPage;
