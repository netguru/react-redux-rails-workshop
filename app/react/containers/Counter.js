import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const Counter = ({ count }) => (
  <div className="counter">
    <h1 className="counter__value">
      Current count is: {count}
    </h1>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter,
});

export default connect(
  mapStateToProps
)(Counter);
