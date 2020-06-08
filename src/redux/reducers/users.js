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
            const {
                username,
                displayName,
                about,
                createdAt,
                updatedAt,
                pictureLocation,
                googleId
            } = action.payload.user
            return {
                ...state,
                username,
                displayName,
                about,
                createdAt,
                updatedAt,
                pictureLocation,
                googleId
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


