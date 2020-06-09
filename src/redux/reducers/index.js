import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { authRegisterReducer } from './registerReducer';

export default combineReducers({
	auth: authReducer
});
