import api from '../../utils/api.js'
import { GETMESSAGES_FAILED } from './messages.js';

//ACTION
export const GET_USERS = "GET_USERS";
export const GETUSERS_FAILED = "GETMESSAGES_FAILED";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"

//ACTION CREATOR (todo)
export const getUsers = users => async (dispatch, getState) => {
    try {
    
     const payload = await api.createUser(users)
     dispatch({
         type:GET_USERS
     })
    } catch (err) {
        dispatch({
            type:GETUSERS_FAILED
        });
     } finally {
        dispatch({
            type:GET_USERS_SUCCESS,
            payload: users
        })
     }
 };