import React, { Component } from 'react';
import RestaurantListItem from './RestaurantListItem';


const RestaurantsList = ({ restaurants }) => (
  <div className="restaurant-list">
    <ul>
      {restaurants.map((restaurant) => (
        <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  </div>
);

// function RestaurantsList({ restaurants, foo }) {
//   return (
//     <div className="restaurant-list">
//       {this.state.restaurants.map((restaurant) => {
//           <RestaurantListItem key={item.id} name={item.name} />
//       })}
//     </div>
//   )
// }

// <RestaurantsList restaurants={['a', 'b']} foo="bar" />

// class RestaurantsList extends Component {
//   contructor() {
//     super();
//     this.state = {
//       restaurants: [],
//     };
//   }

//   render() {
//     return (
//       <div className="restaurant-list">
//       {this.state.restaurants.map((restaurant) => {
//           <RestaurantListItem key={item.id} name={item.name} />
//       })}
//     </div>
//     )
//   }
// }


// RestaurantsList.propTypes = {
//   restaurants: PropTypes.array.isRequired,
// };

export default RestaurantsList;

