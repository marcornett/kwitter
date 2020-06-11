import React, { useEffect } from 'react'
import './Profile.css'
import api from '../../utils/api';

import { Button, Segment, Card, Icon, Image, Form } from 'semantic-ui-react'

export const Profile = (props) => {
    const {
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation,
        // googleId
    } = props

    useEffect(() => {
        props.getUser(props.username)
    }, [pictureLocation]);

    const handleDelete = (event) => {
        props.deleteUser(props.username)
    }

    const hasImage = () => {
        if (props.pictureLocation) {
            return true
        }
        return false
    }
    const inputRef = React.createRef()

    const handleUpload = (event) => {
        const formElement = new FormData(event.target)
        props.addUserPicture(props.username, formElement)

    }
    console.log(props)
    return (
        <React.Fragment>
            <div >
                <Card id="card_component">
                    <Image src={
                        hasImage() ?
                            `https://kwitter-api.herokuapp.com${props.pictureLocation}`
                            :
                            'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg'
                    }
                        wrapped ui={false}
                    />
                    <Form id="image_form" onSubmit={handleUpload}>
                        <Button
                            content="Choose File"
                            icon="file"
                            labelPosition="left"
                            onClick={() => inputRef.current.click()}
                        />
                        <Button type="submit" >
                            Update Image
                            </Button>
                        <input
                            type="file"
                            ref={inputRef}
                            hidden
                            name="picture"
                        />
                    </Form>
                    <Card.Content>
                        <Card.Header>{displayName}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{username}</span>
                            <span className='date'>joined on {new Date(createdAt).toLocaleDateString()}</span>
                        </Card.Meta>

                        <Card.Description>
                            <strong>Bio: </strong>{about}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <span className='date'>Updated on {new Date(updatedAt).toLocaleDateString()}</span>
                        </a>
                    </Card.Content>
                    <Segment inverted>
                        <Button onClick={handleDelete} inverted color='red'>
                            Delete Profile
                    </Button>
                    </Segment>
                </Card>
            </div>
        </React.Fragment>
    )
}