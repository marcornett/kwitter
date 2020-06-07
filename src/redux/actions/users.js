import api from '../../utils/api';

export const DELETE_USER = 'USERS/DELETE_USER'
export const USER = 'USERS/USER'
export const PROFILE_PICTURE = 'USERS/PROFILE_PICTURE'
export const USER_FAILURE = 'USERS/USER_FAILURE'


export const getUser = (username) => async (dispatch, getState) => {
    try {
        const payload = await api.getUserInfo(username);
        // ℹ️ℹ️This is how you would debug the response to a request ℹ️ℹ️
        //console.log({ result })
        dispatch({ type: USER });
    } catch (err) {
        dispatch({
            type: USER_FAILURE,
            payload: err.message
        });
    }
};