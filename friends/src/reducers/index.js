import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIEND, DELETE_FRIEND, EDIT_FRIEND } from '../actions';

const friendsReducer = (friends = [], action) => {
  switch(action.type) {
    case GET_FRIENDS: 
    case ADD_FRIEND:
    case DELETE_FRIEND:
    case EDIT_FRIEND:
      return action.payload.data;
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer,
});

export default rootReducer;