import React from "react";
import { useHeroPost } from "./useHeroPost";

function HeroPost() {
  const { renderHeroPost } = useHeroPost();

  return <div>{renderHeroPost()}</div>;
}

export default HeroPost;
