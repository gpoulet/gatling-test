import { Post } from "../models";
import { fetchPosts } from "../services";
import { AppDispatch } from "../store";

export const SET_POSTS = "users/SET_POSTS";

export const setPosts = (posts: Post[]) => ({
  type: SET_POSTS,
  payload: posts,
});

export const loadPosts = (): ((
  dispatch: AppDispatch
) => Promise<{ payload: Post[]; type: string }>) => {
  return (dispatch: AppDispatch) => {
    return fetchPosts().then((res) => dispatch(setPosts(res)));
  };
};
