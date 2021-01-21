import React from "react";
import renderer from "react-test-renderer";
import UserPost from "./UserPost";

const post1 = {
  userId: 1,
  id: 1,
  title: "titre 1",
  body: "lorem",
};

it("UserPost renders correctly", () => {
  const tree = renderer.create(<UserPost post={post1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
