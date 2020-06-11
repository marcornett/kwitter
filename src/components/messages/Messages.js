import React, { Component } from "react";
import{ 
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Label,
  Icon,
  Menu,
  Segment,
  Form }
 from "semantic-ui-react";


class Messages extends Component {
  render() {
    return (
      <Card
        color="black"
        animation="overlay"
        icon="labeled"
        width="thin"
        // inverted
        // vertical
       
        fluid
      >
        <Card.Content>
                <Image
                  alt=""
                  src={this.props.image}
                  style={{ maxHeight: "40px", maxWidth: "40px" }}
                />
              <Card.Description className="message-output">
                 ~ {this.props.text}
              </Card.Description>
              <Card.Meta>@{this.props.username}</Card.Meta>
              <Card.Description className="likes-dislikes">
                <Card.Meta>
                  {/* add a like button !! TODO: implement adding a like to post funtionality !! */}
                <Button color='twitter'>
                <Icon name='heart' />
                  Like
                </Button>
                <Label as='a' basic color='twitter' pointing='left'>
                {this.props.likes.length}
                </Label>
                  {/* end of add a like button */}
                  <p className='post-date'>Posted on {new Date(this.props.createdAt).toLocaleString()}</p>
                </Card.Meta>
              </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Messages;