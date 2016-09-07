import { counterConstants } from '../constants';

export const increase = () => ({ type: counterConstants.increase });
export const decrease = () => ({ type: counterConstants.decrease });
