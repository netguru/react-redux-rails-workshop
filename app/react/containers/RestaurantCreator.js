import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';
import { restaurantActions } from 'actions';

class RestaurantCreator extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: '',
    };
  }

  onAddRestaurant(e) {
    e.preventDefault();
    this.props.addRestaurant({
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
    });
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onAddressChange(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    return (
      <div className="restaurant-creator">
        <h3>
          Add new restaurant
        </h3>
        <form onSubmit={this.onAddRestaurant.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              onChange={this.onNameChange.bind(this)}
              value={this.state.name}
              id="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              onChange={this.onAddressChange.bind(this)}
              value={this.state.address}
              id="address"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              onChange={this.onDescriptionChange.bind(this)}
              value={this.state.description}
              id="description"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant({ name, address, description }) {
    dispatch(restaurantActions.createRestaurant(name, address, description));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(RestaurantCreator);
