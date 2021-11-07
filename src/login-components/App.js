import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Home from "./home.js";
import Spinner from "./Spinner";
import PrivateRoute from "./PrivateRoute";
import { login, logout } from "../actions/auth";

const App = ({ auth, login, logout }) => (
  <Router history={history}>
    <div>
      <Header login={login} logout={logout} auth={auth} />
      <Spinner />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/home" component={Home} auth={auth} />
        <Route component={() => <div>No such page!</div>} />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, logout })(App);
