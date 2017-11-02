import axios from 'axios';

export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const EDIT_FRIEND = 'EDIT_FRIEND';
export const GET_FRIENDS = 'GET_FRIENDS';

const url = 'http://localhost:5000';

export const addFriend = (newFriend) => {
  const endpoint = url + '/new-friend';
  return axios.post(endpoint, newFriend)
    .then(getFriends);
};

export const deleteFriend = (index) => {
  const endpoint = url + '/delete-friend';
  return axios.delete(endpoint, {data: { index, }})
    .then(getFriends);
};
export const editFriend = (index, update) => {
  const endpoint = url + '/update-friend';
  return axios.put(endpoint, { index, update, })
    .then(getFriends);
};
export const getFriends = () => {
  const endpoint = url + '/friends';
  const friends = axios.get(endpoint);

  return {
    type: GET_FRIENDS,
    payload: friends,
  }
};