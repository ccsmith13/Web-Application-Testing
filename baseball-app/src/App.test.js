import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import App from "./App";
import { addStrike } from "./components/Display";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("strikes add 1", () => {
  const currentStrikes = 0;
  const expected = 1;
  const actual = addStrike(currentStrikes);
  expect(actual).toBe(expected);
});

test("strikes reset to 0 when 3 strikes are reached", () => {
  const currentStrikes = 2;
  const expected = 0;
  const actual = addStrike(currentStrikes);
  expect(actual).toBe(expected);
});

test("rtl renders without crashing", () => {
  render(<App />);
});

test("display container", () => {
  const { getByTestId } = render(<App />);
  getByTestId("display-container");
});