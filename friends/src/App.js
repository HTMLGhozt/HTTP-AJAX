import React, { Component } from 'react';
import FriendsList from './components/FriendsList.js';
import AddFriend from './components/AddFriend.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriend />
        <FriendsList />
      </div>
    );
  }
}

export default App;
