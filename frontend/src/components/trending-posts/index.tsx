import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ReactComponent as TrendingLogo } from "../../assets/trending.svg";
import { postSelectors } from "../../store";
import TrendingPost from "./TrendingPost";
import styles from "./TrendingPosts.module.scss";

function TrendingPosts() {
  const { trending } = useSelector(postSelectors);

  return (
    <div className="border-bottom">
      <Container>
        <div className="d-flex align-items-center">
          <TrendingLogo className="mr-2" width="28" height="29" />
          <p className="font-weight-bold text-uppercase">trending on medium</p>
        </div>
        <div className={`${styles.grid}`}>
          {trending.map((post, index) => (
            <TrendingPost key={post._id} {...post} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TrendingPosts;
