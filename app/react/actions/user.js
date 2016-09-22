import { userConstants } from '../constants';
import { userApi } from '../api';

const addedUser = (user) => ({
  type: userConstants.ADD,
  user,
});

export const addUser = ({ email, password }) => dispatch => {
  userApi.addUser(email, password)
    .then(result => dispatch(addedUser(result.data)));
}

const deletedUser = (user) => ({
  type: userConstants.DELETE,
  user,
});

export const deleteUser = (id) => dispatch => {
  userApi.deleteUser(id)
    .then(result => dispatch(deletedUser(result.data)));
}
