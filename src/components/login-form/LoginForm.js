import React, { useState } from 'react';
import ProptTypes from 'prop-types';
import Loader from '../loader/Loader';
import './LoginForm.css';

import { Link } from 'react-router-dom';

import { Grid, Form, Segment, Message, Header, Icon } from 'semantic-ui-react';
import GoogleButton from '../googleButton/GoogleButton';

export const LoginForm = ({ login, loading, error, getUser }) => {
	// Not to be confused with "this.setState" in classes
	const [state, setState] = useState({
		username: '',
		password: ''
	});

	const handleLogin = (event) => {
		event.preventDefault();
		login(state);
		if (state.username) {
			getUser(state.username)
		}
	};

	const handleChange = (event) => {
		const inputName = event.target.name;
		const inputValue = event.target.value;
		setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
	};

	return loading ? (
		<Loader />
	) : (
			<div className="loginForm-container">
				<Grid className="loginForm">
					<Grid.Column>
						<Header as="h1" icon color="green" textAlign="center">
							<Icon name="leaf" color="green" />
							Log-in to your account
						</Header>

						<Form id="login-form" onSubmit={handleLogin} size="large">
							<Segment stacked>
								<Form.Input
									autoFocus
									required
									fluid
									name="username"
									icon="user"
									iconPosition="left"
									placeholder="Username"
									type="text"
									value={state.username}
									onChange={handleChange}
								/>
								<Form.Input
									fluid
									name="password"
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									value={state.password}
									onChange={handleChange}
								/>
								<div type="submit" disabled={loading} className={loading ? 'ui buttons loading' : 'ui buttons'}>
									<button className="ui button">Submit</button>
								</div>
							</Segment>
						</Form>
						{error && <Message style={{ color: 'red' }}>{error.message}</Message>}
						<Message>
							Need to Sign Up? <Link to="/register"> Sign Up</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div >
		);
};

LoginForm.propTypes = {
	login: ProptTypes.func.isRequired,
	loading: ProptTypes.bool,
	error: ProptTypes.string
};
