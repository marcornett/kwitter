import api from '../../utils/api.js'

export const GET_USERS = "GET_USERS";
export const GET_USERS_FAILED = "GETMESSAGES_FAILED";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"

//ACTION CREATOR (todo)
export const getUsers = () => async (dispatch, getState) => {
    try {
        const payload = await api.userList()
        dispatch({
            type: GET_USERS,
            payload
        })
    } catch (err) {
        dispatch({
            type: GET_USERS_FAILED,
            payload: err.message
        });
    }
};