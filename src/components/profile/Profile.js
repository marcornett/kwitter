import React, { useState, useEffect } from 'react'
import './Profile.css'

import { Button, Segment, Card, Icon, Image } from 'semantic-ui-react'

export const Profile = (props) => {
    const [state, setState] = useState({})
    const handleDelete = () => {
        // api request to delete user
    }
    useEffect(() => {
        // api request for user info and returns object
        props.getUser(props.username)

    })
    const {
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation,
        googleId
    } = props
    const hasImage = () => {
        if (pictureLocation) {
            return pictureLocation
        }
        return false
    }
    return (
        <React.Fragment>
            <button type="submit">
                Choose File
            </button>
            <button type="submit">
                Update Image
            </button>
            <div>{/* {...Dynamic Name...} */}</div>
            <p>{/* ...Dynamic Bio... Default, no bio added*/}</p>
            <button type="submit" onClick={handleDelete}>Delete Profile</button>
            <Card>
                <Image src={hasImage() ?
                    pictureLocation :
                    'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg'}
                    wrapped ui={false}
                />
                <Card.Content>
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in {createdAt}</span>
                    </Card.Meta>

                    <Card.Description>
                        {about}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='hand point right outline' />
                        <span className='date'>Joined in {createdAt}</span>
                    </a>
                </Card.Content>
                <Segment inverted>
                    <Button inverted color='red'>
                        Delete Profile
                </Button>
                </Segment>
            </Card>

        </React.Fragment>
    )
}