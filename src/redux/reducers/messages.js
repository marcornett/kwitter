import { GET_MESSAGES, GETMESSAGES_FAILED, POSTMESSAGE, POSTMESSAGE_SUCCESS } from "../actions"

const initialState = {
  messages: [],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }
    case GETMESSAGES_FAILED:
      return state;
    case POSTMESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case POSTMESSAGE_SUCCESS:
      return state

    default:
      return state;
  }
};
