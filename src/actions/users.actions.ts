import {User} from "../models";
import {fetchUsers} from "../services";
import {AppDispatch} from "../store";

export const SET_USERS = "users/SET_USERS"

export const setUsers = (users: User[]) => ({
    type: SET_USERS,
    payload: users
});

export const loadUsers = (): (dispatch: AppDispatch) => Promise<{ payload: User[]; type: string }> => {
    return (dispatch: AppDispatch) => {
        return fetchUsers()
            .then(res => dispatch(setUsers(res)))
    };
}