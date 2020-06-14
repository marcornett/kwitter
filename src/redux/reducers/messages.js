// TODO: implement
import {GET_MESSAGES, GETMESSAGES_FAILED } from "../actions"

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
    default:
      return state;
  }
};