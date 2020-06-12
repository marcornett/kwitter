import api from '../../utils/api';

export const GET_MESSAGES = "GET_MESSAGES";
export const GETMESSAGES_FAILED = "GETMESSAGES_FAILED";
export const ADD_LIKE = "ADD_LIKE"
export const ADD_LIKE_FAIL = "ADD_LIKE_FAIL"

export const getMessages = () => async (dispatch, getState) => {
    try {
        const payload = await api.messageList()
    dispatch({
        type:GET_MESSAGES,
        payload
    });
} catch (err) {
    dispatch({
        type:GETMESSAGES_FAILED,
        payload: err.message
    })
}}

export const addLike = (username) => async (dispatch, getState) => {
    try {
        const payload = await api.postlike(username)
        dispatch({
            type:ADD_LIKE,
            payload
        });
    } catch (err) {
        dispatch({
            type:ADD_LIKE_FAIL,
            payload:err.message
        });
    }
}