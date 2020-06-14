import React from 'react';
import Users from '../friends-list/Users.js'

class FriendsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    //possibly?
    getFriendsList = () => {

    }

    render() {
        return (
            <React.Fragment>
                <div id='friendsList-Container'>
                    Your FriendsList
               {(this.props./*users?*/).map((user) => (
                    <Users
                        username={user.username}
                        displayName={user.displayname}
                        about={user.about}
                        pictureLocation={user.pictureLocation}
                        key={Math.random() * 10000}
                    />
                ))}
                </div>
            </React.Fragment>
        )


    }

} 
