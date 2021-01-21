import {User} from "../models";
import {fetchUsers, putUser} from "../services";
import {AppDispatch, RootState} from "../store";
import {getUserById} from "../selectors";

export const SET_USERS = "users/SET_USERS"
export const SET_USER = "users/SET_USER"

export const setUsers = (users: User[]) => ({
    type: SET_USERS,
    payload: users
});

export const setUser = (user: User) => ({
    type: SET_USER,
    payload: user
});

export const loadUsers = (): (dispatch: AppDispatch) => Promise<{ payload: User[]; type: string }> => {
    return (dispatch: AppDispatch) => {
        return fetchUsers()
            .then(res => dispatch(setUsers(res)))
    };
}

export const updateName = (id: number, name: string): (dispatch: AppDispatch, getState: () => RootState) => Promise<{ payload: User; type: string }> => {
    return (dispatch, getState) => {

        const state = getState();
        const user = getUserById(state, id);

        if (user) {
            const updatedUser: User = {...user, name}
            return putUser(updatedUser)
                .then(res => dispatch(setUser(res)))
        } else {
            return Promise.reject()
        }
    }
}
