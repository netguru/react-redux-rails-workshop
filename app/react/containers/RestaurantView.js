import React, { PropTypes } from 'react';
import RestaurantCommentList from 'components/RestaurantCommentList';
import { connect } from 'react-redux';

const RestaurantView = ({ restaurant }) => (
  <div className="panel panel-primary">
    <p className="panel-heading">{restaurant.name}</p>
    <p className="panel-body">{restaurant.address}</p>
    <p className="panel-body">{restaurant.description}</p>
    <h2>Comments</h2>
    <RestaurantCommentList comments={restaurant.comments} />
  </div>
);

const mapStateToProps = state => ({
  restaurant: state.restaurants[0],
});

export default connect(
  mapStateToProps
)(RestaurantView);
