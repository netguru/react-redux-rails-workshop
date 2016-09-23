import React, { Component } from 'react';

class RestaurantsSearch extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          onChange={this.props.onSearchChange}
          defaultValue={this.props.currentSearchText}
        />
      </div>
    )
  }
}

export default RestaurantsSearch;
