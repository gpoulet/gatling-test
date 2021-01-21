import axios from "axios";
import { User } from "../models";
import { URL_USERS } from "../constants";

export function fetchUsers(): Promise<User[]> {
  return axios.get(URL_USERS).then((response) => response.data);
}

export function putUser(user: User): Promise<User> {
  return axios
    .put(URL_USERS + "/" + user.id, user)
    .then((response) => response.data);
}
