import api from '../../utils/api';

export const GET_MESSAGES = "GET_MESSAGES";
export const GETMESSAGES_FAILED = "GETMESSAGES_FAILED";
export const POSTMESSAGE = "POSTMESSAGE"
export const POSTMESSAGE_SUCCESS = "POSTMESSAGE_SUCCESS"
export const POSTMESSAGE_CHAR_FAIL = "POSTMESSAGE_CHAR_FAIL"

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
//Todo:(in progress) post a message action//
export const postMessage = text => async (dispatch, getState) => {
    try {
     const token=getState().auth.login.token
     const payload = await api.postMessage(text)
     dispatch({
         type:POSTMESSAGE
     })
    } catch (err) {
        dispatch({
            type:POSTMESSAGE_CHAR_FAIL
        });
     } finally {
        dispatch({
            type:POSTMESSAGE_SUCCESS,
            payload: text
        })
     }
 };
// update the state maybe ?
 export const updateAfterPosting = text => dispatch => {
     return dispatch(postMessage(text))
     .then(()=>dispatch(getMessages()))
 }