import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RestaurantsSearch from 'components/RestaurantsSearch';
import { onSearchChange } from 'actions/restaurant';

const mapStateToProps = state => ({
  currentSearchText: state.currentSearchText,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange(e) {
    dispatch(onSearchChange(e.target.value));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsSearch);
