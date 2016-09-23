import React, { Component } from 'react';
import RestaurantApp from './RestaurantApp';
import { restaurantActions } from 'actions';
import { connect } from 'react-redux';

class RestaurantAppProvider extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    return(
      <RestaurantApp />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadRestaurants() {
    dispatch(restaurantActions.loadRestaurants());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(RestaurantAppProvider);
