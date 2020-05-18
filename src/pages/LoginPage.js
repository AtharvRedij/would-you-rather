import React, { Component } from "react";
import { connect } from "react-redux";
import "./LoginPage.css";
import { setAuthedUser } from "../actions/authedUser";

class LoginPage extends Component {
  state = {
    selectedUser: "", // selected user to login as
    userIds: [],
    users: {},
  };

  componentDidMount() {
    const { users } = this.props;
    const userIds = Object.keys(users);
    if (this.state.selectedUser === "") {
      this.setState({
        selectedUser: userIds[0],
        userIds,
        users,
      });
    }
  }

  handleUserSelect = (event) => {
    this.setState({ selectedUser: event.currentTarget.value });
  };

  // Renders users dropdown for logging in
  UsersDropdown = () => {
    const { userIds, users } = this.state;

    return (
      <select className="usersDropdown" onChange={this.handleUserSelect}>
        {userIds.map((id) => (
          <option key={id} value={id}>
            {users[id].name}
          </option>
        ))}
      </select>
    );
  };

  handleLogin = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.selectedUser));
    this.props.history.replace("/");
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-header">
          <div id="login-label-1">Welcome to the Would You Rather App!</div>
          <div id="login-label-2">Please sign in to continue</div>
        </div>
        <div className="login-info">
          <div id="login-as-label">Sign In As</div>
          <this.UsersDropdown />
          <div className="sign-in-button" onClick={this.handleLogin}>
            Sign In
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(LoginPage);
