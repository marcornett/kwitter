import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS } from '../actions'

const INITIAL_STATE = {
    userList: []
}

export const usersListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                userList: action.payload
            }
        case GET_USERS_FAILED:
            return {
                err: action.payload
            }
        default:
            return state
    }
}
