import React, { Component } from 'react';
import Restaurants from 'components/Restaurants';
import { restaurantActions } from 'actions';
import { connect } from 'react-redux';

class RestaurantAppProvider extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
    this.loadRestaurantsTimeout = window.setInterval(() => {
      this.props.loadRestaurants();
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.loadRestaurantsTimeout);
  }

  render() {
    return(
      <Restaurants restaurants={this.props.restaurants}/>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.filter((r) => r.name.includes(state.currentSearchText)),
});

const mapDispatchToProps = dispatch => ({
  loadRestaurants() {
    dispatch(restaurantActions.loadRestaurants());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantAppProvider);
