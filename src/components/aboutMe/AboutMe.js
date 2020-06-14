import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export const AboutMe = ({ username, updateUser }) => {
	const [user, updateAboutSection] = useState({
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
		updateUser({
			password: user.password,
			about: user.about,
			displayName: user.displayName
		},
			username);
		updateAboutSection((prevState) => ({
			...prevState,
			displayName: '',
			password: '',
			about: ''
		}));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group widths="equal">
				<Form.Input
					autoFocus
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
			</Form.Group>
			<Form.TextArea
				placeholder="Tell us more..."
				rows={3}
				name="about"
				value={user.about}
				onChange={handleChange}
			/>
			<Form.Button>Submit</Form.Button>
		</Form>
	);
};
