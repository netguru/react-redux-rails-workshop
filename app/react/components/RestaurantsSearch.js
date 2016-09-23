import React, { Component } from 'react';

class RestaurantsSearch extends Component {
  render() {
    return (
      <div className="restaurant-search">
        <input
          type='text'
          className="form-control"
          onChange={this.props.onSearchChange}
          defaultValue={this.props.currentSearchText}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

export default RestaurantsSearch;
