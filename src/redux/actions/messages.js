import api from '../../utils/api';

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED";
export const POST_MESSAGE = "POST_MESSAGE"
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS"
export const POST_MESSAGE_FAIL = "MESSAGES/POST_MESSAGE_FAIL"
export const ADD_LIKE = "ADD_LIKE"
export const UN_LIKE = "UN_LIKE"
export const ADD_LIKE_FAIL = "ADD_LIKE_FAIL"
export const UN_LIKE_FAIL = "UN_LIKE_FAIL"
export const GET_USER_PICTURE = 'GET_USER_PICTURE'
export const GET_USER_PICTURE_FAIL = 'GET_USER_PICTURE_FAIL'

export const getMessages = () => async (dispatch, getState) => {
    try {
        const payload = await api.messageList()
        dispatch({
            type: GET_MESSAGES,
            payload
        });
    } catch (err) {
        dispatch({
            type: GET_MESSAGES_FAILED,
            payload: err.message
        })
    }
}

export const addLike = (e, messageId) => async (dispatch, getState) => {
    try {
        const payload = await api.postlike(messageId)
        dispatch({
            type: ADD_LIKE,
            payload,
            messageId,
        });
        dispatch(getMessages())
    } catch (err) {
        dispatch({
            type: ADD_LIKE_FAIL,
            payload: err.message
        });
    }
}

export const unLike = (e, LikeId) => async (dispatch, getState) => {
    try {
        const payload = await api.deleteLike(LikeId)
        dispatch({
            type: UN_LIKE,
            payload,
            LikeId
        });
        dispatch(getMessages())
    } catch (err) {
        dispatch({
            type: UN_LIKE_FAIL,
            payload: err.message
        });
    }
}


export const postMessage = (text) => async (dispatch, getState) => {
    try {
        // const token = getState().auth.login.token
        const payload = await api.postMessage(text)
        dispatch({
            type: POST_MESSAGE,
            payload
        })
        dispatch(getMessages())
    } catch (err) {
        dispatch({
            type: POST_MESSAGE_FAIL,
            payload: err.message
        });
    }
};

export const getUserPicture = (username) => async (dispatch, getState) => {
    try {
        // const token = getState().auth.login.token
        const payload = await api.getUserPicture(username)
        dispatch({
            type: GET_USER_PICTURE,
            payload
        })
        dispatch(getMessages())
    } catch (err) {
        dispatch({
            type: GET_USER_PICTURE_FAIL,
            payload: err.message
        });
    }
};
