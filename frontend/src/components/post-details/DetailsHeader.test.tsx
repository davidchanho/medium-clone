import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../store";
import { testPost } from "../../tests";
import DetailsHeader from "./DetailsHeader";

describe("DetailsHeader", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailsHeader post={testPost} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
