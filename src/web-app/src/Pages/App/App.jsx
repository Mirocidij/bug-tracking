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
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #a171de;

  background-image: url("https://wallbox.ru/wallpapers/main2/201718/kamni-more.jpg");
  background-size: 100% 100%;
`;

const ContentContainer = styled.div`
  padding-top: 8px;
  flex-grow: 1;
  position: relative;
  outline: none;
`;

const App = () => {
  return (
    <MainContainer className="main-container">
      <Header/>

      <ContentContainer>
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