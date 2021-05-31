import React from "react";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Users from "../Users/Users";
import Companies from "../Companies/Companies";
import Boards from "../Boards/Boards";
import Profile from "../Profile/Profile";
import { NoMatchPage } from "../NoMatch/NoMatchPage";
import Board from "../Board/Board";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  background-color: #c5f6f6;
  
  background-image: url("https://img1.goodfon.ru/original/2880x1800/7/e7/vesna-gory-alpy-dolina-doma.jpg");
  background-size: 100% 100%;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  outline: none;
`;

const App = () => {
  return (
    <MainContainer className="main-container">
      <Header/>

      <ContentContainer className="content">
        <Switch>
          <Route exact path="/" component={Board}/>
          <Route exact path="/users" component={Users}/>
          <Route exact path="/companies" component={Companies}/>
          <Route exact path="/boards" component={Boards}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact component={NoMatchPage}/>
        </Switch>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;