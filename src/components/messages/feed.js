import React from "react";
import Messages from "./Messages";
import { Post_InputEnhanced } from "./Post_Input"
import './Messages.css'
import {
  Grid,
  Header,
  Segment,
}
  from "semantic-ui-react";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Grid>
        <Grid.Row centered columns={1}>
          <Grid.Column width={6} >
            <Segment >
              <Post_InputEnhanced />
              <Header as="h1" textAlign="center">
                Your Feed
                <br />
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