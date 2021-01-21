import React from "react";
import renderer from "react-test-renderer";
import AppBar from "./AppBar";

it("AppBar renders correctly", () => {
  const tree = renderer.create(<AppBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
