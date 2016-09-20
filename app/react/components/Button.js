import React, { PropTypes } from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
