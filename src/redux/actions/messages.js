import api from '../../utils/api';
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED";
export const POST_MESSAGE = "POST_MESSAGE"
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS"
export const POST_MESSAGE_FAIL = "MESSAGES/POST_MESSAGE_FAIL"

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

export const postMessage = (text) => async (dispatch, getState) => {
    console.log('dispatch')
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
