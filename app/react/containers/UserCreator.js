import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../actions';

import UserCreator from 'components/UserCreator';

const mapDispatchToProps = dispatch => ({
  addUser(user) {
    dispatch(userActions.addUser(user));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(UserCreator);
