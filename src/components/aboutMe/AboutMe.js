import React, { useState } from 'react';
import { Grid, Form, Segment, Header } from 'semantic-ui-react';

export const AboutMe = () => {
	const [ user, updatAboutSection ] = useState({
		username: '',
		password: '',
		newAboutMe: '',
		saved: false
	});
	const handleChange = (evt) => {
		const inputName = evt.target.name;
		const inputValue = evt.target.value;
		updatAboutSection((prevState) => ({ ...prevState, [inputName]: inputValue }));
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		updatAboutSection((prevState) => ({ ...prevState, saved: true }));
	};
	return (
		<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth: 450 }}>
				{user.saved ? <div>Saved!</div> : null}
				<Header as="h2" textAlign="center">
					About Me
				</Header>
				<Form onSubmit={handleSubmit} class="ui form">
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
						<Form class="field ui">
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
						<button class="ui fluid button">Update</button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};
