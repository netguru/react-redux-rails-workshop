import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RestaurantsSearch from 'components/RestaurantsSearch';
import { onTagSearchChange } from 'actions/restaurant';

const mapStateToProps = state => ({
  currentSearchText: state.currentSearchTagText,
  placeholder: 'Restaurant Type'
});

const mapDispatchToProps = dispatch => ({
  onSearchChange(e) {
    dispatch(onTagSearchChange(e.target.value));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsSearch);
