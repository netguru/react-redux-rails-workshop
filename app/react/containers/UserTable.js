import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../actions';

import UserTable from 'components/UserTable';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  deleteUser(user) {
    dispatch(userActions.deleteUser(user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
