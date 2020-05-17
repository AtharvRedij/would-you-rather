import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>HomePage</h1>
      </div>
    );
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
