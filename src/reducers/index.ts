import { combineReducers } from "@reduxjs/toolkit";
import posts from "./posts.reducer";
import users from "./users.reducer";

export default combineReducers({
  posts,
  users,
});
