import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import Todos from "./Todos";

describe("Todos module", () => {
  test("renders progress block", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );
    const linkElement = getByText(/Progress/i);
    expect(linkElement).toBeInTheDocument();
  });
});
