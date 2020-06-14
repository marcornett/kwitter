import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions/users';

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
	username: state.user.username,
	displayName: state.user.displayName,
	about: state.user.about,
	createdAt: state.user.createdAt,
	updatedAt: state.user.updatedAt,
	pictureLocation: state.user.pictureLocation,
	googleId: state.user.googleId
});
//this enhancer

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
	updateUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
