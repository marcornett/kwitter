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
	const [ user, setUserState ] = useState({
		username: '',
		displayName: '',
		password: '',
		passwordConfirmation: ''
	});

	const isValidPassword = ({ password }) => {
		if (password < 6) {
			return false;
		}

		return true;
	};

	const isFormEmpty = ({ displayName, password }) => {
		return !displayName.length || !password.length;
	};

	const handleChange = (evt) => {
		const inputName = evt.target.name;
		const inputValue = evt.target.value;
		setUserState((prevState) => ({ ...prevState, [inputName]: inputValue }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		register(user);
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
							name="passwordConfirmation"
							icon="repeat"
							iconPosition="left"
							placeholder="Password Confirmation"
							type="password"
							value={user.passwordConfirmation}
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

Register.propTypes = {
	register: ProptTypes.func.isRequired,
	loading: ProptTypes.bool,
	error: ProptTypes.string
};
