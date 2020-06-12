// TODO: implement
import {GET_MESSAGES, GETMESSAGES_FAILED, ADD_LIKE } from "../actions"

const initialState = {
  messages: [],
  messageId: []
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
    case ADD_LIKE:
      let copy = [...state.todos];
      const clone = copy.map((m) => {
      if (m.username === action.payload) {
      m.username.like++;
      }
    })
      return { messages: clone }
    // case POSTMESSAGE:
    //   return {
    //     ...state,
    //     text: action.payload,
    //     isAuthenticated: action.token
    //   }
    // case POSTMESSAGE_SUCCESS:
    //   return state;
    default:
      return state;
  }
};