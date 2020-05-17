import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  state = {};
  render() {
    return <h1>HomePage</h1>;
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    users,
    questions,
    authedUser,
  };
};

export default connect(mapStateToProps)(HomePage);
