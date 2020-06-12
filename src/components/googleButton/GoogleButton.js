import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { register } from '../../redux/actions/users';
import { login } from '../../redux/actions/auth';

const CLIENT_ID = '537796771615-g1140ah4vtbbn4bbs2pmd4ad7ncjp53f.apps.googleusercontent.com';

class GoogleButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			displayName: '',
			password: '',
			isSignedIn: false
		};
	}

	login = (res) => {
		let results = res.profileObj;
		console.log(results.givenName);
		console.log(results.name);
		console.log(results.googleId);
		this.setState((prevState) => ({
			...prevState,
			username: results.givenName,
			displayName: results.name,
			password: results.googleId,
			isSignedIn: true
		}));
		register(results.givenName, results.name, results.googleId);
		login(results.givenName, results.googleId);
	};

	render() {
		if (this.state.isSignedIn) {
			console.log('logging on?');
			//login({this.state.username, this.state.password});
		}

		return (
			<GoogleLogin
				clientId={CLIENT_ID}
				buttonText={this.state.isSignedIn ? 'Login out' : 'Login'}
				onSuccess={this.login}
				onFailure={this.onFailure}
				cookiePolicy={'single_host_origin'}
				responseType="code,token"
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	error: state.auth.error
});

const mapDispatchToProps = {
	register,
	login
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleButton);
