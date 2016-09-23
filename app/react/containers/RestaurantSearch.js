import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RestaurantsList from 'components/RestaurantsList';

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

// function mapStateToProps(state) {
//   return {
//     count: state.counter
//   }
// }

export default connect(
  mapStateToProps
)(RestaurantsList);


