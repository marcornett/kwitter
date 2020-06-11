import React, { useState } from 'react';
import { AboutMe } from './AboutMe';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export const AboutMeModal = ({ pictureLocation, displayName }) => {
	const [ isModalOpen, setModal ] = useState({
		open: false
	});

	const close = () => {
		setModal((prevState) => ({ ...prevState, open: true }));
	};
	return (
		<Modal trigger={<Button>Update Your AboutMe</Button>}>
			<Modal.Header>Update Your Profile</Modal.Header>
			<Modal.Content image>
				<Image
					wrapped
					size="medium"
					src="https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg"
				/>
				<Modal.Description>
					<Header>Hello {displayName}</Header>
					<AboutMe />
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions />
		</Modal>
	);
};
