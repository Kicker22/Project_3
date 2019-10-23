import React from "react";
import './App.css'
import Home from "./Pages/home";
import Content from "./Pages/content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/browse" component={Content} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
