import React from 'react';

import FriendsList from './components/FriendsList.js';
import AddFriend from './components/AddFriend.js';


export default () => {
  return (
    <div className="App">
      <AddFriend />
      <FriendsList />
    </div>
  );
}
