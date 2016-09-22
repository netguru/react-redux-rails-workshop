import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../actions';

import UserCreator from 'components/UserCreator';

const mapDispatchToProps = dispatch => ({
  addUser() {
    dispatch(userActions.addUser());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(UserCreator);
