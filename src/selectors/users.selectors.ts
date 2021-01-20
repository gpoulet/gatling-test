import {RootState} from "../store";

export const getUsers = (state: RootState) => state.users

export const getUserById = (state: RootState, id: number) => getUsers(state).find(user => user.id === id)