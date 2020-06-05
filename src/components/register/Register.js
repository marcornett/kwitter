import React, { Component } from 'react';
// import axios from 'axios';
import API from '../../utils/api';

import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			displayName: '',
			password: '',
			passwordConfirmation: '',
			loading: false,
			errors: []
		};
	}

	displayErrors = (errors) => errors.map((error, idx) => <p key={idx}>{error.message}</p>);

	isNamesValid = ({ username, displayName }) => {
		if (username.length < 3 || displayName.length < 3) {
			return false;
		}
		if (username.length > 20 || displayName.length > 20) {
			return false;
		}

		return true;
	};

	isPasswordValid = ({ password, passwordConfirmation }) => {
		if (password.length < 3 || passwordConfirmation.length < 3) {
			return false;
		}
		if (password.length > 20 || passwordConfirmation.length > 20) {
			return false;
		}

		return true;
	};

	isFormEmpty = ({ username, displayName, password, passwordConfirmation }) => {
		return !username.length || !displayName.length || !password.length || !passwordConfirmation.length;
	};

	isFormValid = () => {
		let errors = [];
		let err;
		if (this.isFormEmpty(this.state)) {
			err = { message: 'Feilds cant be empty' };
			this.setState({ errors: errors.concat(err) });
			return false;
		} else if (!this.isNamesValid(this.state)) {
			err = { message: 'Names have to longer then 3 letters and shorter than 20' };
			this.setState({ errors: errors.concat(err) });
			return false;
		} else if (!this.isPasswordValid(this.state)) {
			err = { message: 'Password is invalid' };
			this.setState({ errors: errors.concat(err) });
			return false;
		} else {
			return true;
		}
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	// createUser = async ({ username, displayName, password }) => {
	// 	const URL = 'https://kwitter-api.herokuapp.com/users';
	// 	try {
	// 		let res = await axios.post(URL, {
	// 			username,
	// 			displayName,
	// 			password
	// 		});

	// 		console.log(res);
	// 	} catch (error) {
	// 		console.log({ error });
	// 	}
	// };

	handleSubmit = async (evt) => {
		evt.preventDefault();
		if (this.isFormValid()) {
			this.setState({ errors: [], loading: true });
			API.createUser(this.state);
		}
	};

	render() {
		const { username, displayName, password, passwordConfirmation, errors, loading } = this.state;
		return (
			<Grid textAlign="center" verticalAlign="middle" className="app">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h1" icon color="black" textAlign="center">
						<Icon name="globe" color="black" />
						Register for devChat!
					</Header>
					<Form onSubmit={this.handleSubmit} size="large">
						<Segment stacked>
							<Form.Input
								fluid
								name="username"
								icon="user"
								iconPosition="left"
								placeholder="Username"
								type="text"
								value={username}
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								name="displayName"
								icon="user"
								iconPosition="left"
								placeholder="Display Name"
								type="text"
								value={displayName}
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								name="password"
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								type="password"
								value={password}
								onChange={this.handleChange}
							/>

							<Form.Input
								fluid
								name="passwordConfirmation"
								icon="repeat"
								iconPosition="left"
								placeholder="Password Confirmation"
								type="password"
								value={passwordConfirmation}
								onChange={this.handleChange}
							/>
							<Button
								disabled={loading}
								className={loading ? 'loading' : ''}
								color="blue"
								fluid
								size="large"
							>
								Submit
							</Button>
						</Segment>
					</Form>
					{errors.length > 0 && (
						<Message error>
							<h3>Error</h3>
							{this.displayErrors(errors)}
						</Message>
					)}
					<Message>
						Already a user? <Link to="/"> Sign In</Link>
					</Message>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Register;
