import { connect } from 'react-redux';
import { register, getUser } from '../../redux/actions/users';

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

const mapDispatchToProps = {
	getUser,
	register,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
