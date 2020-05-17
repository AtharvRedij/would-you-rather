import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { connect } from "react-redux";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { handleInitialData } from "./actions/shared";
import Navbar from "./components/Navbar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading, authedUser } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {/* 
          1. If loading is true display nothing 
          2. loading becomes false but there is no logged in user,
          so set url path for login and render login page
          3. else set other URL paths for later use */}
          {loading === true ? null : authedUser === null ? (
            <Fragment>
              <Route path="/login" exact component={LoginPage} />
              <Redirect to="/login" />
            </Fragment>
          ) : (
            <Fragment>
              <Navbar />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
              </Switch>
            </Fragment>
          )}
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    // loading true if not users in store
    loading: Object.keys(users).length === 0,
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
