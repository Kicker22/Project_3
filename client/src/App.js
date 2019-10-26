import React from "react";
import './App.css'
import Home from "./Pages/home";
import Savings from "./Pages/savings";
import Questions from "./Pages/questions";
import Articles from "./Pages/articles";
import User from "./Pages/user";
import Create from "./Pages/create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  BlogArticle  from "./Pages/BlogArticle";
import { ArticleCard } from "./Components/Axios/ArticleCard";
import Meetups from "../src/Pages/meetups";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/savings" component={Savings} />
        <Route exact path="/questionlist" component={Questions} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/read" component={BlogArticle} />
        <Route exact path="/find" component={ArticleCard} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/meetups" component={Meetups} />
      </Switch>
  </Router>
  );
}

export default App;
