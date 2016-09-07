import { counterConstants } from '../constants';

export default (state = 0, action) => {
  switch (action.type) {
    case counterConstants.increase: return state + 1;
    case counterConstants.decrease: return Math.max(state - 1, 0);
    default: return state;
  }
};
