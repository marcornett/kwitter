import React, { useState } from 'react';
import ProptTypes from 'prop-types';
import Loader from '../loader/Loader';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

export const Register = ({ register, error }) => {
	const [user, setUserState] = useState({
		username: '',
		displayName: '',
		password: '',
		passwordConfirmation: '',
		error: [],
		isSubmitted: false
	});

	const handleChange = (evt) => {
		const inputName = evt.target.name;
		const inputValue = evt.target.value;
		setUserState((prevState) => ({ ...prevState, [inputName]: inputValue }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log({ user });

		register({
			username: user.username,
			displayName: user.displayName,
			password: user.password
		});
		setUserState({ isSubmitted: true });
		setUserState({
			username: '',
			displayName: '',
			password: '',
			passwordConfirmation: '',
			error: [],
			isSubmitted: true
		});
	};

	return (
		<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h1" icon color="green" textAlign="center">
					<Icon name="leaf" color="green" />
							Sign-up here.
						</Header>
				<Form onSubmit={handleSubmit} size="large">
					<Segment stacked>
						<Form.Input
							required
							fluid
							name="username"
							icon="user"
							iconPosition="left"
							placeholder="Display Name"
							type="text"
							value={user.username}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							required
							name="displayName"
							icon="user"
							iconPosition="left"
							placeholder="Display Name"
							type="text"
							value={user.displayName}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							required
							name="password"
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
							value={user.password}
							onChange={handleChange}
						/>

						<Form.Input
							fluid
							required
							name="passwordConfirmation"
							icon="repeat"
							iconPosition="left"
							placeholder="Password Confirmation"
							type="password"
							value={user.passwordConfirmation}
							onChange={handleChange}
						/>
						<Button
							disabled={user.isSubmitted}
							className={user.isSubmitted ? 'loading' : ''}
							color="green"
							fluid
							size="large"
						>
							Submit
						</Button>
					</Segment>
				</Form>
				{user.isSubmitted ? <Redirect to="/" /> : ''}
				<Message>
					Already a user? <Link to="/" style={{ color: "green" }}> Sign In</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

Register.propTypes = {
	register: ProptTypes.func.isRequired,
	loading: ProptTypes.bool,
	error: ProptTypes.string
};
