import React from "react";
import styled from "styled-components";
import { IPost } from "../../types";
import Post from "../post";

const Item = styled.li`
  width: 100%;
  display: flex;
  padding: 0 12px;
`;

const NumberedItem = styled.span`
  font-size: 30px;
  color: ${(props) => props.theme.colors.numberedText};
  font-weight: bold;
  margin-right: 16px;
`;

interface Props extends IPost {
  index: number;
}

function TrendingItem({ index, ...post }: Props) {
  return (
    <Item>
      <NumberedItem>0{index + 1}</NumberedItem>
      <Post key={`post-${post._id}`} {...post} />
    </Item>
  );
}

export default TrendingItem;
