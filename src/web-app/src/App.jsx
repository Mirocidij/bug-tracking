import React from 'react';
import './App.css';
import Header from "./Common/Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Companies from "./Pages/Companies/Companies";
import Boards from "./Pages/Boards/Boards";
import Profile from "./Pages/Profile/Profile";
import AppDnd from "./AppDnd";
import LoginForm from "./Features/Login/LoginForm";

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
                <Route exact path="/login" component={LoginForm} />
                <Route exact component={NoMatch}/>
            </Switch>
        </div>
    );
}

export default App;
