import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS } from '../actions'

const INITIAL_STATE = {
    userList: [],
    loading: false
}

export const usersListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...INITIAL_STATE,
                loading: true
            }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                userList: action.payload,
                loading: false
            }
        }
        case GET_USERS_FAILED:
            return {
                loading: false
            }
        default:
            return state
    }
}