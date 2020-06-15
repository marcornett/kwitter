import React from 'react'
import { connect } from "react-redux";
import { getMessages, postMessage } from "../../redux/actions/messages";
import './Post_Input.css'
import { useState } from 'react'
import {
    Button,
    Header,
    Form,
    Icon,
    Input,
    Image
}
    from "semantic-ui-react";
import { useEffect } from 'react';

const Post_Input = (props) => {
    const [inputData, addInputMessage] = useState('')
    const [sent, postMessage] = useState(false)

    const handlePostMessage = (e) => {
        e.preventDefault()
        props.postMessage({ text: inputData });
        addInputMessage('')
        postMessage(!sent)
    };
    const handleInputChange = (event) => {
        addInputMessage(event.target.value);
    };

    useEffect(() => {
    }, [sent])

    return (
        <div>
            <div id="avatar">
                <Image src={props.pictureLocation ? `https://kwitter-api.herokuapp.com${props.pictureLocation}` :
                    'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg'} avatar />
                {props.displayName}
            </div>
            <Form //post a message input
                onSubmit={handlePostMessage}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                <Input
                    type="text"
                    name="text"
                    className="input-field"
                    required
                    value={inputData}
                    placeholder={"What's happening?"}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    id="messageSubmit">
                    leaf <Icon name='pencil' />
                </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        pictureLocation: state.user.pictureLocation,
        displayName: state.user.displayName,
    }
};

const mapDispatchToProps = {
    getMessages,
    postMessage,
};

export const Post_InputEnhanced = connect(mapStateToProps, mapDispatchToProps)(Post_Input);
