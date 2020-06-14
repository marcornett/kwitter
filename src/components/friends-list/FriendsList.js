import React from 'react';
import Users from '../friends-list/Users.js'

class FriendsList extends React.Component {
    constructor(props){
       super(props); 

       this.state = {

       }
    }
    
 render(){
     return (
         <React.Fragment>
             <div id='friendsList-Container'>
               Your FriendsList
               {(this.props./*users?*/ */).map((user) => (
                  <Users
                    username={user.username}
                    //image={user.image}
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

} <img></img>
                <div id="userNames">
                    <p>{/*api.Users.username*/}</p>
                    <p>{/*api.Users.displayName*/}</p>
                </div>
                <div>
                    {/*api.User.about*/}
                </div>