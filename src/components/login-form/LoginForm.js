import React, { useState } from 'react';
import ProptTypes from 'prop-types';
import Loader from '../loader/Loader';
import './LoginForm.css';

import { Link } from 'react-router-dom';

import { Grid, Form, Segment, Header, Message, Icon } from 'semantic-ui-react';
import GoogleButton from '../googleButton/GoogleButton';

export const LoginForm = ({ login, loading, error }) => {
	// Not to be confused with "this.setState" in classes
	const [state, setState] = useState({
		username: '',
		password: ''
	});

	const handleLogin = (event) => {
		event.preventDefault();
		login(state);
		// Needs to update Redux state
	};

	const handleChange = (event) => {
		const inputName = event.target.name;
		const inputValue = event.target.value;
		setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
	};

	return loading ? (
		<Loader />
	) : (
			<Grid textAlign="center" verticalAlign="middle" className="app">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h1" icon color="black" textAlign="center">
						<Icon name="globe" color="black" />
					Register for devChat!
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
								<div className="or" />
								<GoogleButton />
							</div>
						</Segment>
					</Form>
					{error && <Message style={{ color: 'red' }}>{error.message}</Message>}
					<Message>
						Need to Sign Up? <Link to="/register"> Sign Up</Link>
					</Message>
				</Grid.Column>
			</Grid>
		);
};

LoginForm.propTypes = {
	login: ProptTypes.func.isRequired,
	loading: ProptTypes.bool,
	error: ProptTypes.string
};
