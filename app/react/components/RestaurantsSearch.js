import React, { Component } from 'react';

class RestaurantsSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  // onAddUser(e) {
  //   e.preventDefault();
  //   this.props.addUser({
  //     email: this.state.email,
  //     password: this.state.password,
  //   });
  // }

  // onEmailChange(e) {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // }

  // onPasswordChange(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }

  render() {
    return (
      <input type='text' />
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addUser({ email, password }) {
//     dispatch(userActions.createUser(email, password));
//   },
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(UserCreator);

export default RestaurantsSearch;
