import React, { Component } from "react";
import Messages from "./Messages";
import './Messages.css'
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Form,
  Icon,
  Label
}
  from "semantic-ui-react";

class FeedPage extends Component {
  likeHandler = (id) => {
    this.props.addLike(id)
  }
  removeLike = (id) => {
    this.props.unLike(id)
  }
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    if (this.props.messages === null) {
      return <div></div>
    } else {
      return (
        <Grid>
          <Grid.Row centered columns={1}>
            <Grid.Column width={8} >
              <Segment basic>
                <Header as="h1" textAlign="center">
                  Type Your Message
              </Header>
                <Form //post a message input
                  onSubmit={this.addHandler}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <input
                    type="text"
                    name="text"
                    className="Message-input"
                    required
                    value={this.props.text}
                  //onChange={this.addHandler}
                  />
                  <Button type="submit" className="message-submit" color='twitter'>
                    submit
                </Button>
                </Form>
                <Divider />
                {/* {console.log(this.props.messages)} */}
                <Header as="h1" textAlign="center">
                  Your Feed
                <br />
                  {(this.props.messages).map((message) => (
                    <Card
                      color="black"
                      animation="overlay"
                      icon="labeled"
                      width="thin"
                      fluid
                    >

                      <Card.Content>
                        <Image
                          alt=""
                          src={message.image}
                          style={{ maxHeight: "40px", maxWidth: "40px" }}
                        />
                        <Card.Description className="message-output">
                          ~ {message.text}
                        </Card.Description>
                        <Card.Meta>@{message.username}</Card.Meta>
                        <Card.Description className="likes-dislikes">
                          <Card.Meta>
                            {/* add a like button !! TODO: implement adding a like to post funtionality !! */}
                            <Button color='twitter' onClick={(e) => this.props.addLike(e, message.id) || this.props.unLike(e, message.likes.id)}>
                              <Icon name='heart' />
                            Like
                          </Button>
                            <Label as='a' basic color='twitter' pointing='left'>
                              {message.likes.length}
                            </Label>
                            {/* end of add a like button */}
                            <p className='post-date'>Posted on {new Date(message.createdAt).toLocaleString()}</p>
                          </Card.Meta>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  ))}
                </Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }
}
export default FeedPage
