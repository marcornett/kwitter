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
// import {
//     USER,
//     USER_FAILURE,
//     DELETE_USER,
//     PUT_PICTURE_FAILURE,
// } from "../actions"

// const INITIAL_STATE = {
//     id: 0,
//     username: '',
//     messageId: 0,
//     createdAt: ''
// }

// export const usersReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case USER:
//             const {
//                 username,
//                 displayName,
//                 about,
//                 createdAt,
//                 updatedAt,
//                 pictureLocation,
//                 googleId
//             } = action.payload.user
//             return {
//                 ...state,
//                 username,
//                 displayName,
//                 about,
//                 createdAt,
//                 updatedAt,
//                 pictureLocation,
//                 googleId
//             }
//         case USER_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload
//             }
//         case DELETE_USER:
//             return {
//                 ...INITIAL_STATE
//             }
//         case PUT_PICTURE_FAILURE:
//             return {
//                 error: action.payload
//             }
//         default:
//             return state
//     }
// }


