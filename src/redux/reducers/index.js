import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { usersReducer } from "./users";
import { messagesReducer } from "./messages";
import { likesReducer } from "./likes";


export default combineReducers({
    auth: authReducer,
    user: usersReducer,
    messages: messagesReducer,
    likes: likesReducer
});
