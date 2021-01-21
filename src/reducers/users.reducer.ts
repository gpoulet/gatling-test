import {SET_USER, SET_USERS} from "../actions";
import {User} from "../models";

const initialState: User[] = []

type UsersAction =
    | { type: "users/SET_USERS", payload: User[] }
    | { type: "users/SET_USER", payload: User }

function users(state = initialState, action: UsersAction) {
    switch (action.type) {
        case SET_USERS:
            return action.payload
        case SET_USER:
            console.log("SET_USER action:", action)
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        default:
            return state
    }
}

export default users;