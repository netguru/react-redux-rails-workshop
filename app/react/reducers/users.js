import { userConstants } from '../constants';
import userReducer from './user';

export default (state = [], action) => {
  switch (action.type) {
    case userConstants.GET_ALL:
      return action.users;
    case userConstants.ADD:
      return [
        ...state,
        userReducer(null, action),
      ];
    case userConstants.DELETE:
      return state.filter(u => u.id !== action.user.id);
    case userConstants.UPDATE:
      const user = state.find(u => u.id === action.user.id);
      return [
        ...state.slice(0, state.findIndex(u => u.id === action.user.id)),
        userReducer(user, action),
        ...state.slice(state.findIndex(u => u.id === action.user.id) + 1),
      ];
    default:
      return state;
  }
};
