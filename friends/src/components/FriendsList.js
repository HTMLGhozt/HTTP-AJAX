import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../actions';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        {this.props.friends.map((friend, i) => {
          console.log(friend.name);
          return (
            <p key={'p'+i}> 
              <button onClick={() => { this.props.deleteFriend(i) }}>Delete</button> 
              {Object.keys(friend).map((key, i) => {
                return <span style={{marginLeft: 4+'px'}} key={i}>{`${key}: ${friend[key]}`}</span>
              })}
            </p>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps, { getFriends, deleteFriend })(FriendsList);