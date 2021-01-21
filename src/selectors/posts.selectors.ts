import { RootState } from "../store";

export const getPosts = (state: RootState) => state.posts;

export const getPostsByUserId = (state: RootState, userId: number) =>
  getPosts(state).filter((post) => post.userId === userId);
