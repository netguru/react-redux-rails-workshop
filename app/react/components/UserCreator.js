import React, { PropTypes } from 'react';
import Button from './Button';

const UserCreator = ({ addUser }) => (
  <div className="counter-modifier">
    <h3 className="counter-modifier__title">
      Add new user
    </h3>
    <Button onClick={addUser}> + </Button>
  </div>
);

UserCreator.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default UserCreator;
