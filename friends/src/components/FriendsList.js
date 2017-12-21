import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend, editFriend } from '../actions';
import Form from './UpdateFriend'

class FriendsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      update: false, 
      id: NaN,
    };
  }
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        {this.props.friends.map((friend, i) => {
          return (
            <div key={i}> 
              <button onClick={() => { this.setState({ update: !this.state.update, id: i, }) }}>Update</button>
              <button onClick={() => { this.props.deleteFriend(i) }}>Delete</button>

              {Object.keys(friend).map((key) => {
                return <span style={{marginLeft: 4+'px'}} key={key + i}>{`${key}: ${friend[key]}`}</span>
              })}
            </div>
          );
        })}
        <Form update={ this.state.update } id={ this.state.id } inputFunction={ this.props.editFriend } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps, { getFriends, deleteFriend, editFriend })(FriendsList);