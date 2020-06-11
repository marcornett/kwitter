import React, { useEffect } from 'react';
import './Profile.css';

import { Button, Segment, Card, Icon, Image } from 'semantic-ui-react';
import { AboutMeModal } from '../aboutMe/AboutMeModal';

export const Profile = (props) => {
	useEffect(() => {
		props.getUser(props.username);
	});

	const handleDelete = (event) => {
		props.deleteUser(props.username);
	};

	const hasImage = () => {
		if (pictureLocation) {
			return pictureLocation;
		}
		return false;
	};

	const {
		username,
		displayName,
		about,
		createdAt,
		updatedAt,
		pictureLocation
		// googleId
	} = props;

	return (
		<React.Fragment>
			<button type="submit">Choose File</button>
			<button type="submit">Update Image</button>
			<button type="submit" onClick={handleDelete}>
				Delete Profile
			</button>
			<AboutMeModal displayName="displayName" />
			<Card>
				<Image
					src={
						hasImage() ? (
							hasImage
						) : (
							'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg'
						)
					}
					wrapped
					ui={false}
				/>
				<Card.Content>
					<Card.Header>{displayName}</Card.Header>
					<Card.Meta>
						<span className="date">{username}</span>
					</Card.Meta>
					<Card.Meta>
						<span className="date">Joined in {createdAt}</span>
					</Card.Meta>

					<Card.Description>{about}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name="hand point right outline" />
						<span className="date">Updated at {updatedAt}</span>
					</a>
				</Card.Content>
				<Segment inverted>
					<Button onClick={handleDelete} inverted color="red">
						Delete Profile
					</Button>
				</Segment>
			</Card>
		</React.Fragment>
	);
};
