import React, { Component } from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsSearch from 'containers/RestaurantsSearch';


const Restaurants = ({ restaurants }) => (
  <div>
    <RestaurantsSearch />
    <RestaurantsList restaurants={restaurants}/>
  </div>
);

export default Restaurants;

