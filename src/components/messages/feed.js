import React from "react";
import { Post_InputEnhanced } from "./Post_Input"
import './Messages.css'
import {
  Grid,
  Header,
  Segment,
  Card,
  Button,
  Icon,
  Label,
  Image
}
  from "semantic-ui-react";

class FeedPage extends React.Component {
  likeHandler = (id) => {
    this.props.addLike(id)
  }
  removeLike = (id) => {
    this.props.unLike(id)
  }
  componentDidMount() {
    this.props.getMessages();
  }

  // Can't figure out how to use returned image in a tag
  // getPhotoInfo = () => {
  //   this.props.getUserPicture('testName')
  //     .then((result) =>
  //       console.log(result)
  //     )
  // }

  render() {
    return (
      <div id='mainFeed'>
        <Segment>
          <Post_InputEnhanced />
          <Header as="h1" textAlign="center">
            Your Feed
                </Header>
          <br />
          {(this.props.messages).map((message) => (
            <Card
              color="black"
              animation="overlay"
              icon="labeled"
              width="thin"
              fluid
              key={Math.floor(Math.random() * 1000000)}
            >
              <Card.Content>
                <Card.Description className="message-output">
                  {/* <Image id="messageAvatars" src={`https://kwitter-api.herokuapp.com/users/${message.username}/picture`}
                        alt="Profile Picture"
                        avatar /> */}
                      @ {message.username}
                </Card.Description>
                <Card.Meta>{message.text}</Card.Meta>
                <Card.Description className="likes-dislikes">
                  <Card.Meta>
                    <Button className="likeButton" onClick={(e) => {
                      this.props.addLike(e, message.id)
                      console.log(message.id)
                      // this.props.unLike(e, message.likes.id)
                    }
                    }>
                      <Icon name='heart' />
                            Like
                          </Button>
                    <Label as='a' basic pointing='left'>
                      {message.likes.length}
                    </Label>
                    <p className='postDate'>Posted on{new Date(message.createdAt).toLocaleString()}</p>
                  </Card.Meta>
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Segment>
      </div>
    );
  }
}

export default FeedPage
