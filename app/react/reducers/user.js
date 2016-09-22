import { userConstants } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case userConstants.ADD:
    case userConstants.DELETE:
      return action.user;
    case userConstants.UPDATE:
      return {
        ...state,
        ...action.user,
      }
    default:
      return state;
  }
};
