import React from "react";
import TopicList from "../topic-list";

function TopicsYouFollow() {
  return (
    <div>
      <p>Topics you follow</p>
      <ul>
        <TopicList />

        <a href="#!">See More</a>
      </ul>
    </div>
  );
}

export default TopicsYouFollow;
