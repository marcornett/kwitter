import React, { useState } from 'react';

import { updateUser } from '../../redux/actions/users';
import { Grid, Segment, Form } from 'semantic-ui-react';

export const AboutMe = ({ displayName }) => {
	const [ user, updateAboutSection ] = useState({
		displayName: '',
		password: '',
		about: ''
	});

	const handleChange = (evt) => {
		const inputName = evt.target.name;
		const inputValue = evt.target.value;
		updateAboutSection((prevState) => ({ ...prevState, [inputName]: inputValue }));
		//updateAboutSection((prevState) => ({ ...prevState, newAboutMe: evt.target.value }));
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(user);
		updateUser(user);
		updateAboutSection((prevState) => ({
			...prevState,
			displayName: '',
			password: '',
			about: ''
		}));
	};

	return (
		<Grid>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Form onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							autoFocus
							required
							name="displayName"
							icon="user"
							iconPosition="left"
							placeholder={`${displayName}`}
							type="text"
							value={user.username}
							onChange={handleChange}
						/>
						<Form.Input
							autoFocus
							required
							name="password"
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
							value={user.password}
							onChange={handleChange}
						/>

						<Form.TextArea
							placeholder="Tell us more..."
							rows={3}
							name="about"
							value={user.about}
							onChange={handleChange}
						/>
						<Form.Button>Update!</Form.Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};
