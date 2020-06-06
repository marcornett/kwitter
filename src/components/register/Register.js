import React, { useState } from 'react';
import ProptTypes from 'prop-types';

import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import {} from '../../redux/actions/auth';

// class Register extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			username: '',
// 			displayName: '',
// 			password: '',
// 			passwordConfirmation: '',
// 			loading: false,
// 			errors: []
// 		};
// 	}

export const Register = ({ register, loading, error }) => {
	const [ state, setState ] = useState({
		displayName: '',
		password: '',
		passwordConfirmation: '',
		loading: false
	});

	//const displayErrors = (errors) => state.errors.map((error, idx) => <p key={idx}>{error.message}</p>);

	const isNamesValid = ({ username, displayName }) => {
		if (username.length < 3 || displayName.length < 3) {
			return false;
		}
		if (username.length > 20 || displayName.length > 20) {
			return false;
		}

		return true;
	};

	const isPasswordValid = ({ password, passwordConfirmation }) => {
		if (password.length < 3 || passwordConfirmation.length < 3) {
			return false;
		}
		if (password.length > 20 || passwordConfirmation.length > 20) {
			return false;
		}

		return true;
	};

	const isFormEmpty = (state) => {
		return (
			!state.username.length ||
			!state.displayName.length ||
			!state.password.length ||
			!state.passwordConfirmation.length
		);
	};

	// const isFormValid = () => {
	// 	let errors = [];
	// 	let err;
	// 	if (isFormEmpty(this.state)) {
	// 		err = { message: 'Feilds cant be empty' };
	// 		setState({ errors: errors.concat(err) });
	// 		return false;
	// 	} else if (!isNamesValid(this.state)) {
	// 		err = { message: 'Names have to longer then 3 letters and shorter than 20' };
	// 		setState({ errors: errors.concat(err) });
	// 		return false;
	// 	} else if (isPasswordValid(this.state)) {
	// 		err = { message: 'Password is invalid' };
	// 		setState({ errors: errors.concat(err) });
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// };

	const handleChange = (evt) => {
		const inputName = evt.target.name;
		const inputValue = evt.target.value;
		setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		setState({ errors: [], loading: true });
		// API.createUser(state);
		register(state);
	};
	return (
		<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h1" icon color="black" textAlign="center">
					<Icon name="globe" color="black" />
					Register for devChat!
				</Header>
				<Form onSubmit={handleSubmit} size="large">
					<Segment stacked>
						<Form.Input
							fluid
							name="displayName"
							icon="user"
							iconPosition="left"
							placeholder="Display Name"
							type="text"
							value={state.displayName}
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

						<Form.Input
							fluid
							name="passwordConfirmation"
							icon="repeat"
							iconPosition="left"
							placeholder="Password Confirmation"
							type="password"
							value={state.passwordConfirmation}
							onChange={handleChange}
						/>
						<Button disabled={loading} className={loading ? 'loading' : ''} color="blue" fluid size="large">
							Submit
						</Button>
					</Segment>
				</Form>

				<Message>
					Already a user? <Link to="/"> Sign In</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};
