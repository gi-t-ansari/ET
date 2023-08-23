import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FormPage from "./components/FormPage";
import Thanks from "./components/Thanks";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={FormPage} />
        <Route path="/thanks" component={Thanks} />
      </Switch>
    </Router>
  );
}
