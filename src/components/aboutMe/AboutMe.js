import React, { useState } from 'react';
import { Grid, Form, Segment, Header } from 'semantic-ui-react';

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
		setModal((prevState) => ({ ...prevState, saved: true }));
	};
	return (
		<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth: 450 }}>
				{modal.saved ? <div>Saved!</div> : null}
				<Header as="h2" textAlign="center">
					About Me
				</Header>
				<Form onSubmit={handleSubmit} className="ui form">
					<Segment stacked>
						<Form.Input
							required
							transparent
							size="large"
							fluid
							name="username"
							icon="user"
							iconPosition="left"
							placeholder="Display Name"
							type="text"
							value={user.username}
							onChange={handleChange}
						/>
						<Form className="field ui">
							<textarea
								required
								fluid
								rows="5"
								placeholder="What do you want to say about yourself"
								type="text"
								value={user.newAboutMe}
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
						</Form>
						<button className="ui fluid button">Update</button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};
