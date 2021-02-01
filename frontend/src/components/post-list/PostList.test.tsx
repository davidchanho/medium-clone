import { shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import PostList from ".";
import { store } from "../../store";
import Post from "../post";

describe("<PostList/>", () => {
  it("should render", () => {
    const wrapped = shallow(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
    expect(wrapped.find(Post)).toHaveLength(0);
  });
});
