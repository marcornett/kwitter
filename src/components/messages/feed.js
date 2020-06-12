import React, { Component } from "react";
import Messages from "./Messages";
import './Messages.css'
import{ 
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Form }
 from "semantic-ui-react";

class FeedPage extends Component {
  //state = { text: "" };
  likeHandler = (id) => {
    this.props.addLike(id)
  }
  addHandler = (event) => {
    if (event.key === "Enter") {
      this.props.addMessage(this.props.username, event.target.value)
    }
  }
  handlePostMessage = e => {
    e.preventDefault();
    this.props.postMessage(e.target);
    //this.setState({ text: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

   componentDidMount() {
     this.props.getMessages();
   }

  render() {
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

              <Header as="h1" textAlign="center">
                Your Feed
                <br/>
                {(this.props.messages).map((message) => (
                  <Messages
                    likeHandler={this.likeHandler}
                    username={message.username}
                    text={message.text}
                    likes={message.likes}
                    createdAt={message.createdAt}
                    key={Math.random() * 10000}
                  />
                ))}
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default FeedPage
