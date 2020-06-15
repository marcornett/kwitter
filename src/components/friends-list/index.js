import React from 'react';
import { getUsers } from '../../redux/actions/friendsList'
import { connect } from "react-redux";
import './FriendsList.css'
import { List, Image } from 'semantic-ui-react'


class FriendsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2 id="friendTitle">Users </h2>
                <div id='friendsList-Container'>
                    {this.props.userList.map((user) => (
                        <div id='usersContainer'>
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
                                        <List.Header as='a'>{user.displayName}</List.Header>
                                        <List.Description>
                                            Last seen on at
                                            <a>
                                                <b> {new Date(user.updatedAt).toLocaleDateString()}</b>
                                            </a>{' '}.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userList: state.userList.userList.users
})

const mapDispatchToProps = {
    getUsers
}
export const FriendsListEnhanced = connect(mapStateToProps, mapDispatchToProps)(FriendsList)
