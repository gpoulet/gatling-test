import { getPosts, getPostsByUserId } from "./posts.selectors";
import { User } from "../models";

const post1 = {
  userId: 1,
  id: 1,
  title: "titre 1",
  body: "lorem",
};
const post2 = {
  userId: 1,
  id: 2,
  title: "titre 2",
  body: "ipsum",
};
const post3 = {
  userId: 2,
  id: 3,
  title: "titre 3",
  body: "is",
};
const posts = [post1, post2, post3];

const users: User[] = [];

let state = { posts, users };

test("getPosts should return posts", () => {
  expect(getPosts(state)).toBe(posts);
});

test("getPostsByUserId(1) should return 2 posts", () => {
  expect(getPostsByUserId(state, 1)).toMatchObject([post1, post2]);
});
