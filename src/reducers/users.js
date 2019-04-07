import {RECEIVE_USERS, UPDATE_USER} from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case UPDATE_USER:
      state[action.user.id] = action.user;
      return state;
    default :
      return state
  }
}