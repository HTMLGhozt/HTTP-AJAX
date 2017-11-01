import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        {this.props.friends.map((friend, i) => {
          return Object.keys(friend).map((key, i) => {
            return <p key={i}>{`${key}: ${friend[key]}`}</p>
          });
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

export default connect(mapStateToProps, { getFriends })(FriendsList);