import React from 'react';
import './App.css';
import Header from "./Common/Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Users from "./Features/Users/Users";
import Companies from "./Features/Companies/Companies";
import Boards from "./Features/Boards/Boards";
import Profile from "./Features/Profile/Profile";
import AppDnd from "./AppDnd";

const NoMatch = () => {
    return (
        <div>
            <h1>No Match!</h1>
        </div>
    )
}

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
                <Route exact component={NoMatch}/>
            </Switch>
        </div>
    );
}

export default App;
