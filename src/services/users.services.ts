import axios from "axios";
import User from "../models/User";

const url = "https://jsonplaceholder.typicode.com/users";

export function fetchUsers(): Promise<User[]> {
    return axios.get(url)
        .then(response => response.data);
};