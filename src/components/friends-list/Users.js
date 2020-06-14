import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div id='usersContainer'>
                    <img> {this.props.pictureLocation} </img>
                    <div id="userNames">
                        <p> {this.props.username} </p>
                        <p> {this.props.displayName} </p>
                    </div>

                    <div> {this.props.about} </div>
                </div>
            </React.Fragment>
        )
    }
}
