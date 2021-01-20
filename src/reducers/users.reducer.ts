import {SET_USERS} from "../actions";
import {User} from "../models";

const initialState: User[] = []

type UsersAction = {
    type: string,
    payload: User[]
}

function users(state = initialState, action: UsersAction) {
    switch (action.type) {
        case SET_USERS:
            return action.payload
        default:
            return state
    }
}

export default users;