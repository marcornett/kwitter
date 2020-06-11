import React, { useState } from 'react';
import { Grid, Form, Segment, Header } from 'semantic-ui-react';

export const AboutMe = () => {
	const [ AboutMe, updatAboutSection ] = useState();
	const handleChange = (evt) => {
		const inputName = evt.target.name;
		const inputValue = evt.target.value;
		updatAboutSection((prevState) => ({ ...prevState, [inputName]: inputValue }));
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
	};
	return (
		<Grid textAlign="center" verticalAlign="middle" className="app">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" textAlign="center">
					About Me
				</Header>
				<Form class="ui form">
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
						/>
						<Form class="field ui">
							<textarea
								required
								fluid
								rows="5"
								placeholder="What do you want to say about yourself"
								type="text"
							/>
						</Form>
						<button class="ui fluid button">Update</button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};
