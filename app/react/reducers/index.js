import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import restaurants from 'reducers/restaurants';
import currentSearchText from 'reducers/currentSearchText';
import currentTagSearchText from 'reducers/currentTagSearchText';

export default combineReducers({
  counter,
  users,
  restaurants,
  currentSearchText,
  currentTagSearchText
});
