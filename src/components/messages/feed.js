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

  handlePostMessage = e => {
    e.preventDefault();
    // this.props.postMessage(this.state);
    // this.setState({ text: "" });
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
          {/* <Grid.Column floated="left" width={8}>
            <Card
              color="green"
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted 
              vertical
              width="thin"
              fluid
            >
              <Card.Content>
                <Image
                  src={this.props.usersimage}
                  className="userPic"
                  style={{ maxHeight: "200px", maxWidth: "200px" }}
                  alt=""
                />
                <Image src={this.props.image} />
                <Segment style={{ padding: "1em 0em" }} inverted color="orange">
                  <Card.Header as="h2" textAlign="center">
                    {this.props.username}
                  </Card.Header>
                </Segment>
                <Card.Description>
                  <Card.Meta as="h2">Display Name:</Card.Meta>
                  {this.props.displayName}
                </Card.Description>
                <Divider />
                <Card.Description>
                  <Card.Meta as="h2">About: </Card.Meta>
                  {this.props.about}
                </Card.Description>
                <Divider />
              </Card.Content>
            </Card>
          </Grid.Column> */}

          <Grid.Column width={8} >
            <Segment basic>
              <Header as="h1" textAlign="center">
                Type Your Message
              </Header>
              <Form //post a message input
                onSubmit={this.handlePostMessage}
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
                  onChange={this.handleChange}
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
                    username={message.username}
                    //image={message.image}
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

// export default connect(
//   ({ auth, users, messages }) => ({
//     loginInfo: auth.login,
//     username: users.username,
//     displayName: users.displayName,
//     about: users.about,
//     userList: users.usersList,
//     userimage: users.usersImages[auth.login.id],
//     messageList: messages.list.map(message => {
//       const user = users.usersList.find(user => user.id === message.userId);
//       if (user) {
//         return {
//           ...message,
//           displayName: user.displayName,
//           image: users.usersImages[user.id] || users.defaultImage
//         };
//       } else {
//         return message;
//       }
//     })
//   }),
//   { getMessages, postMessage }
// )(FeedPage)