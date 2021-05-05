import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import PostDetailsPage from ".";
import { store } from "../../store";
import { theme } from "../../styles/theme";

describe("PostDetailsPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router>
              <PostDetailsPage />
            </Router>
          </ThemeProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
