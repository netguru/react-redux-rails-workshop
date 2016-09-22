import { userConstants } from '../constants';
import { userApi } from '../api';

const addedUser = (user) => ({
  type: userConstants.ADD,
  user,
});

export const addUser = () => dispatch => {
  const email = 'asdasd@adads.asd' + (Math.random() * 100);
  const password = 'adas1asdasdasd';

  userApi.addUser(email, password)
    .then(result => dispatch(addedUser(result.data)));
}
