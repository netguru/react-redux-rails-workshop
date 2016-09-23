import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';
import { restaurantActions } from 'actions';

class CommentCreator extends Component {
  constructor() {
    super();
    this.state = {
      rating: '',
      description: '',
    };
  }

  onAddComment(e) {
    e.preventDefault();
    this.props.addComment({
      id: this.props.restaurantId,
      rating: this.state.rating,
      description: this.state.description,
    });
  }

  onRatingChange(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    return (
      <div className="comment-creator">
        <h3>
          Add new comment
        </h3>
        <form onSubmit={this.onAddComment.bind(this)}>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              onChange={this.onRatingChange.bind(this)}
              value={this.state.rating}
              id="rating"
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


const mapStateToProps = state => ({
  restaurantId: state.restaurants[0].id,
});

const mapDispatchToProps = dispatch => ({
  addComment({ id, rating, description }) {
    dispatch(restaurantActions.createComment(id, rating, description));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentCreator);
