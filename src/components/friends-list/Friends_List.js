import React from 'react';
import './FriendsList.css'
import { List, Image } from 'semantic-ui-react'
import Loader from '../loader/Loader';

export class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 20,
            offset: 10
        }
    }
    componentWillMount = () => {
        this.props.getUsers(10, 0)
    }
    handleScroll = (event) => {
        // console.log(event.target.scrollHeight)
        // console.log(event.target.scrollTop)
        // console.log(event.target.clientHeight)
        const scrollHeight = event.target.scrollHeight
        const scrollTop = event.target.scrollTop
        const clientHeight = event.target.clientHeight
        const listEnd = scrollHeight - scrollTop === clientHeight

        if (listEnd) {
            // console.log('test')
            this.props.getUsers(10, this.state.offset)
            this.setState((state) => ({
                ...this.state,
                limit: this.state.limit,
                offset: this.state.offset + 10
            }))
            // this.props.userList.userList.users.concat(await this.props.getUsers(10, this.state.offset).users)
            // console.log('bottom')
        }
    }

    render() {
        return (
            <div>
                <h2 id="friendTitle">Users </h2>
                <div id='friendsList-Container' onScroll={this.handleScroll}>
                    {this.props.loading ? <Loader /> :
                        this.props.userList.users.map((user) => (
                            <div id='usersContainer' >
                                <List>
                                    <List.Item>
                                        <Image avatar src={
                                            user.pictureLocation ?
                                                `https://kwitter-api.herokuapp.com${user.pictureLocation}`
                                                :
                                                "https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg"
                                        }
                                        />
                                        <List.Content>
                                            <List.Header id="displayName" as='a'>{user.displayName}</List.Header>
                                            <List.Description>
                                                Last seen on at
                                            <a id="date">
                                                    <b> {new Date(user.updatedAt).toLocaleDateString()}</b>
                                                </a>{' '}.
                                        </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <br />
                                </List>
                            </div>
                        ))}
                </div>
            </div>
        )
    }
}


