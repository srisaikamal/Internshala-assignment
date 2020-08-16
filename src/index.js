import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar";

// Redux
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog/:id" component={Blogs} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
