import React, { Component } from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsSearch from 'containers/RestaurantsSearch';
import RestaurantsTagSearch from 'containers/RestaurantsTagSearch';

const Restaurants = ({ restaurants }) => (
  <div>
    <div className='row text-center restaurants-filters'>
      <RestaurantsSearch />
      <RestaurantsTagSearch />
    </div>
    <RestaurantsList restaurants={restaurants}/>
  </div>
);

export default Restaurants;

