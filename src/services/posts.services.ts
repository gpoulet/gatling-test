import axios from "axios";
import { Post } from "../models";
import { URL_POSTS } from "../constants";

export function fetchPosts(): Promise<Post[]> {
  return axios.get(URL_POSTS).then((response) => response.data);
}
