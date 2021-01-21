import { SET_POSTS } from "../actions";
import { Post } from "../models";

const initialState: Post[] = [];

type PostsAction = {
  type: string;
  payload: Post[];
};

function posts(state = initialState, action: PostsAction) {
  switch (action.type) {
    case SET_POSTS:
      return action.payload;
    default:
      return state;
  }
}

export default posts;
