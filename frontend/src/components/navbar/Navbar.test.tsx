import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Navbar from ".";
import { store } from "../../store";

describe("Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Navbar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
