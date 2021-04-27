import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Comments from ".";
import { store } from "../../store";

describe("Comments", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Comments />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
