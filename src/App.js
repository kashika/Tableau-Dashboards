import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Index from "./components/index.component";
import Search from "./components/search.component";
import Connectivity from "./components/connectivity.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a href="http://localhost:3000/sidebar" >&laquo;back</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    View
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/search"} className="nav-link">
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/connectivity"} className="nav-link">
                        Connectivity Chart
                    </Link>
                </li>
            </ul>
                <h2 className="navbar-dark">IoT Data Manager</h2>
            </div>
          </nav>
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/index" component={Index} />
            <Route path="/search" component={Search} />
              <Route path="/connectivity" component={Connectivity} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
