import api from '../../utils/api';

// AUTH CONSTANTS
export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE';

//New user request
export const REGISTER_REQUEST = 'AUTH/USERS_REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'AUTH/USERS_REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'AUTH/USERS_REGISTER_FAILURE';

export const LOGOUT = 'AUTH/LOGOUT';
/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const login = (credentials) => async (dispatch, getState) => {
	try {
		dispatch({ type: LOGIN });
		const payload = await api.login(credentials);
		// ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
		//console.log({ results });
		dispatch({ type: LOGIN_SUCCESS, payload });
	} catch (err) {
		dispatch({
			type: LOGIN_FAILURE,
			payload: err.message
		});
	}
};

export const logout = () => async (dispatch, getState) => {
	try {
		// We do not care about the result of logging out
		// as long as it succeeds
		await api.logout();
	} finally {
		/**
     * Let the reducer know that we are logged out
     */
		dispatch({ type: LOGOUT });
	}
};

export const register = (credentials) => async (dispatch, getstate) => {
	try {
		//console.log(credentials);
		dispatch({ type: REGISTER_REQUEST });
		const payload = await api.createUser(credentials);
		dispatch({ type: REGISTER_SUCCESS, payload });
	} catch (err) {
		dispatch({
			type: REGISTER_FAILURE,
			payload: err.message
		});
	}
};
// END AUTH ACTIONS
