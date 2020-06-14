import api from '../../utils/api';

export const DELETE_USER = 'USERS/DELETE_USER';
export const USER = 'USERS/USER';
export const PROFILE_PICTURE = 'USERS/PROFILE_PICTURE';
export const USER_FAILURE = 'USERS/USER_FAILURE';
export const LOGOUT = 'AUTH/LOGOUT';
export const PUT_PICTURE_FAILURE = 'USERS/PUT_PICTURE_FAILURE'

export const getUser = (username) => async (dispatch, getState) => {
	try {
		const payload = await api.getUserInfo(username);
		// ℹ️ℹ️This is how you would debug the response to a request ℹ️ℹ️
		dispatch({
			type: USER,
			payload
		});
	} catch (err) {
		dispatch({
			type: USER_FAILURE,
			payload: err.message
		});
	}
};

export const register = (credentials) => async (dispatch, getstate) => {
	try {
		await api.createUser(credentials);
	} catch (err) {
		dispatch({
			type: USER_FAILURE,
			payload: err.message
		});
	}
};

export const deleteUser = (username) => async (dispatch, getState) => {
	try {
		await api.deleteUser(username);
		// ℹ️ℹ️This is how you would debug the response to a request ℹ️ℹ️
		dispatch({ type: DELETE_USER });
	} catch (err) {
		dispatch({
			type: USER_FAILURE,
			payload: err.message
		});
	} finally {
		/**
     * Let the reducer know that we are logged out
     */
		dispatch({ type: LOGOUT });
	}
};

export const addUserPicture = (username, picture) => async (dispatch, getState) => {
	try {
		await api.putUserPicture(username, picture)

	} catch (err) {
		dispatch({
			type: PUT_PICTURE_FAILURE,
			payload: err.message
		})
	}
}

export const updateUser = ({ password, about, displayName }, username) => async (dispatch, getState) => {
	console.log('test')
	try {
		const payload = await api.updateUser({ password, about, displayName }, username);
		dispatch({
			type: USER,
			payload
		});
	} catch (err) {
		dispatch({
			type: USER_FAILURE,
			payload: err.message
		});
	}
};
