import { GET_MESSAGES, POST_MESSAGE, POST_MESSAGE_FAIL } from "../actions"
const initialState = {
  messages: []
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
    default:
      return state;
  }
};
//current messages
