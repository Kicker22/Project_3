import React from "react";
import './App.css'
import Home from "./Pages/home";
import Meetups from "./Pages/meetups";
import Savings from "./Pages/savings";
import Questions from "./Pages/questions";
import Articles from "./Pages/articles";
import User from "./Pages/user";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  BlogArticle  from "./Pages/BlogArticle";
import  { ArticleCard } from "./Components/Axios/ArticleCard";


function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meetups" component={Meetups} />
        <Route exact path="/savings" component={Savings} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/user" component={User} />
        <Route exact path="/read" component={BlogArticle} />
        <Route exact path="/find" component={ArticleCard} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
