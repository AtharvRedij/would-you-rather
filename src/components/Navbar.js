import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import "./Navbar.css";

const Navbar = ({ user, dispatch, history, location }) => {
  return (
    <div className="navbar">
      <div className="navbar-primary-nav">
        <NavLink
          className={`nav-item ${
            location.pathname === "/" ? "nav-item-active" : ""
          }`}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={`nav-item ${
            location.pathname === "/question/new" ? "nav-item-active" : ""
          }`}
          to="/question/new"
        >
          New Question
        </NavLink>

        <NavLink
          className={`nav-item ${
            location.pathname === "/leaderboard" ? "nav-item-active" : ""
          }`}
          to="/leaderboard"
        >
          Leaderboard
        </NavLink>
      </div>

      <div className="navbar-secondary-nav">
        <div className="navbar-user-info">
          <img
            className="navbar-user-img"
            src={user.avatarURL}
            alt={user.name}
          />
          <div className="navbar-user-name">{user.name}</div>
        </div>
        <div
          className="navbar-logout"
          onClick={() => {
            dispatch(setAuthedUser(null));
            history.replace("/login");
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    user: users[authedUser],
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
