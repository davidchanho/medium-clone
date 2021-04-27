import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import DetailsBar from ".";
import { store } from "../../store";

describe("DetailsBar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailsBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
