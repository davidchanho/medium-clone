import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import PostOptions from ".";
import { store } from "../../store";
import { testPost } from "../../tests";

describe("PostOptions", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PostOptions post={testPost} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
