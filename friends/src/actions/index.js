import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';

export const getFriends = () => {
  const endpoint = 'http://localhost:5000/friends';
  const friends = axios.get(endpoint);

  return {
    type: GET_FRIENDS,
    payload: friends,
  } 
};

export const addFriend = (newFriend) => {
  const endpoint = 'http://localhost:5000/new-friend';
  const retValue = axios.post(endpoint, newFriend)
    .then(() => {
      return getFriends();
    });
  return retValue;
};