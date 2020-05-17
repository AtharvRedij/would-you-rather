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
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
          </Switch>
          {loading === true ? null : authedUser === null ? (
            <Redirect to="/login" />
          ) : null}
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    loading: Object.keys(users).length === 0,
    authedUser,
  };
};
export default connect(mapStateToProps)(App);
