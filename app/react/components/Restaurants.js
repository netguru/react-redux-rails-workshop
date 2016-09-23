import React, { Component } from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsSearch from './RestaurantsSearch';


const Restaurants = ({ restaurants }) => (
  <div>
    <RestaurantsSearch />
    <RestaurantsList restaurants={restaurants}/>
  </div>
);

export default Restaurants;

