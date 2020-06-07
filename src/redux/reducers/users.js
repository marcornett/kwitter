import { USER, USER_FAILURE } from "../actions"

const INITIAL_STATE = {
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    pictureLocation: "",
    googleId: ""
}

export const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER:
            return {
                ...state,
                username: action.payload
            }
        case USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}


