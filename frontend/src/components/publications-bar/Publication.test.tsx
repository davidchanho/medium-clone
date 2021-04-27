import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import PublicationsBar from ".";
import { store } from "../../store";

describe("PublicationsBar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PublicationsBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
