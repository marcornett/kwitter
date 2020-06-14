import React, { useState, useEffect } from 'react';
import './Profile.css';
import { AboutMeContainer } from '../aboutMe'

import { Button, Segment, Card, Image, Form, } from 'semantic-ui-react'

export const Profile = (props) => {
    const [image, handleImageChange] = useState(true)
    useEffect(() => {
        props.getUser(props.username)
    }, [image]);

    const {
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation
    } = props;

    const handleDelete = (event) => {
        props.deleteUser(props.username);
    };

    const hasImage = () => {
        if (props.pictureLocation) {
            return true
        }
        return false
    }
    const handleUpload = (event) => {
        const formElement = new FormData(event.target)
        props.addUserPicture(props.username, formElement)
        handleImageChange(prevState => !prevState)
    }

    const inputRef = React.createRef()

    return (
        <React.Fragment>
            <div className="profile_aboutMe">
                <Card id="card_component">
                    <Image src={
                        hasImage() ?
                            `https://kwitter-api.herokuapp.com${pictureLocation}`
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
                        <span className='date'>Updated on {new Date(updatedAt).toLocaleDateString()}</span>
                    </Card.Content>
                    <Segment inverted>
                        <Button onClick={handleDelete} inverted color='red'>
                            Delete Profile
                    </Button>
                    </Segment>
                </Card>
                <div id="aboutMeContainer">
                    <AboutMeContainer displayName={displayName} />
                </div>
            </div>
        </React.Fragment>
    )
}
