import { connect } from 'react-redux';
//import { register } from '../../redux/actions/users';

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	error: state.auth.error,
	username: state.user.username,
	displayName: state.user.displayName,
	about: state.user.about,
	createdAt: state.user.createdAt,
	updatedAt: state.user.updatedAt,
	pictureLocation: state.user.pictureLocation,
	googleId: state.user.googleId
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
<<<<<<< HEAD
	//register,
	getUser
=======
	//register
>>>>>>> master
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
