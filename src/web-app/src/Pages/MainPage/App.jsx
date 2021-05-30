import React from "react";
import './Styles/App.css'
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import AppDnd from "../../AppDnd";
import Users from "../Users/Users";
import Companies from "../Companies/Companies";
import Boards from "../Boards/Boards";
import Profile from "../Profile/Profile";
import { NoMatchPage } from "../NoMatch/NoMatchPage";

const App = () => {
  return (
    <div className="main-container">
      <Header/>

      <Switch>
        <Route exact path="/" component={AppDnd}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/companies" component={Companies}/>
        <Route exact path="/boards" component={Boards}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact component={NoMatchPage}/>
      </Switch>
    </div>
  );
}

export default App;