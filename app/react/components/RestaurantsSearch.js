import React, { Component } from 'react';

class RestaurantsSearch extends Component {
  render() {
    return (
      <div className="restaurant-search">
        <input
          type='text'
          onChange={this.props.onSearchChange}
          defaultValue={this.props.currentSearchText}
          placeholder="Restaurant name"
        />
      </div>
    )
  }
}

export default RestaurantsSearch;
