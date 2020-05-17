import React, { Component } from "react";
import { connect } from "react-redux";

class LoginPage extends Component {
  state = {};
  render() {
    const { users } = this.props;

    return <h1>LoginPage</h1>;
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(LoginPage);
