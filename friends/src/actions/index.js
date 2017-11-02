import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const EDIT_FRIEND = 'EDIT_FRIEND';

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
  return axios.post(endpoint, newFriend)
    .then(getFriends);
};

export const deleteFriend = (removeFriend) => {
  console.log(removeFriend);
  const endpoint = 'http://localhost:5000/delete-friend';
  return axios.delete(endpoint, {data: {index: removeFriend}})
    .then(getFriends);
}