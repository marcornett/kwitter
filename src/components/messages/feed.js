import React from "react";
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
class FeedPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  handlePostMessage = () => {
    postMessage(this.state.text);
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
   //current message feed
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
                  value={this.state.text}
                  onChange={this.handleChange}
                />
                <Button 
                  name='text'
                  type="submit" 
                  className="message-submit" 
                  color='twitter'
                  onSubmit={this.handlePostMessage}>
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