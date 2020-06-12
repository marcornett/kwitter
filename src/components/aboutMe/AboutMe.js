import React, { useState } from 'react';
import ProptTypes from 'prop-types';
import { updateUser } from '../../redux/actions/users';
import { Grid, Form, Segment, Header, TextArea } from 'semantic-ui-react';

export const AboutMe = () => {
	const [ user, updateAboutSection ] = useState({
		username: '',
		password: '',
		newAboutMe: ''
	});
	const [ modal, setModal ] = useState({
		open: false,
		saved: false
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
			username: '',
			password: '',
			newAboutMe: ''
		}));
		setModal((prevState) => ({ ...prevState, saved: true }));
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group widths="equal">
				<Form.Input
					autoFocus
					required
					name="username"
					icon="user"
					iconPosition="left"
					placeholder="Username"
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
			</Form.Group>
			<Form.TextArea
				placeholder="Tell us more..."
				rows={3}
				name="newAboutMe"
				value={user.newAboutMe}
				onChange={handleChange}
			/>
			<Form.Button>Submit</Form.Button>
		</Form>
	);
};

AboutMe.propTypes = {
	newAboutMe: ProptTypes.string.isRequired
};
