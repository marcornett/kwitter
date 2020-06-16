import api from '../../utils/api.js'

export const GET_USERS = "GET_USERS";
export const GET_USERS_FAILED = "GETMESSAGES_FAILED";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"

export const getUsers = (limit, offset) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_USERS,
        })
        const payload = await api.userList(limit, offset)
        dispatch({
            type: GET_USERS_SUCCESS,
            payload
        })
    } catch (err) {
        dispatch({
            type: GET_USERS_FAILED,
            payload: err.message
        });
    }
};
