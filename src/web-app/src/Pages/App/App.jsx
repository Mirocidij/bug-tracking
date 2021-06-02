import React from "react";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Users from "../Users/Users";
import Companies from "../Companies/Companies";
import Boards from "../UserBoards/UserBoards";
import Profile from "../Profile/Profile";
import { NoMatchPage } from "../NoMatch/NoMatchPage";
import Board from "../Board/Board";
import styled from "styled-components";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #FAFBFC;

  ${props => props.backgroundIsPicture
          ? `background-image: url(${props.backgroundUrl});`
          : 'background-image: none'}

  background-size: 100% 100%;
`;

const ContentContainer = styled.div`
  padding-top: 8px;
  flex-grow: 1;
  position: relative;
  outline: none;
`;

const App = ({ backgroundIsPicture, backgroundUrl }) => {
  return (
    <MainContainer
      backgroundIsPicture={backgroundIsPicture}
      backgroundUrl={backgroundUrl}
      className="main-container"
    >
      <Header backgroundIsPicture={backgroundIsPicture}/>

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

const mapStateToProps = (state) => ({
  ...state.app
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);