import { GET_MESSAGES, POST_MESSAGE, POST_MESSAGE_FAIL, GET_USER_PICTURE, GET_USER_PICTURE_FAIL } from "../actions"

const initialState = {
  messages: [],
  userPicture: ''
};
export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }
    case POST_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      }
    case POST_MESSAGE_FAIL:
      return {
        ...initialState,
        error: action.payload,
      };
    case GET_USER_PICTURE:
      return {
        ...initialState,
        userPicture: action.payload
      }
    case GET_USER_PICTURE_FAIL:
      return {
        error: action.payload
      }
    default:
      return state;
  }
};
