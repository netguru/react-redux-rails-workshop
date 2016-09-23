import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import restaurants from 'reducers/restaurants';
import currentSearchText from 'reducers/currentSearchText';

export default combineReducers({
  counter,
  users,
  restaurants,
  currentSearchText,
});
