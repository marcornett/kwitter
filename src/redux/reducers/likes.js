import { ADD_LIKE, ADD_LIKE_FAIL, UN_LIKE, UN_LIKE_FAIL } from "../actions"

const initialState = {
    likes: [],
    id: []
}

export const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIKE:
            return {
                ...state,
                likes: action.payload,
            }
        case ADD_LIKE_FAIL:
            return state
        case UN_LIKE:
            return {
                ...state,
                likes: action.payload,
            }
        case UN_LIKE_FAIL:
            return state
        default:
            return state
    }
}

