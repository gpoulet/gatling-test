import axios from "axios";
import {User} from "../models";
import {URL_USERS} from "../constants";

export function fetchUsers(): Promise<User[]> {
    return axios.get(URL_USERS)
        .then(response => response.data);
};