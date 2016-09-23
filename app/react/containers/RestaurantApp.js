import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Restaurants from 'components/Restaurants';

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
)(Restaurants);


