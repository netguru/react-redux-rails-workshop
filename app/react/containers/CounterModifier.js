import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { counterActions } from '../actions';
import Button from '../components/Button';

export const CounterModifier = ({ increaseCount, decreaseCount }) => (
  <div className="counter-modifier">
    <h3 className="counter-modifier__title">
      Modify the redux state below
    </h3>
    <Button onClick={increaseCount}> + </Button>
    <Button onClick={decreaseCount}> - </Button>
  </div>
);

CounterModifier.propTypes = {
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  increaseCount() {
    dispatch(counterActions.increase());
  },
  decreaseCount() {
    dispatch(counterActions.decrease());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(CounterModifier);
