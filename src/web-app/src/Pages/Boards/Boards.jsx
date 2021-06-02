import React from "react";
import * as actions from "./actions";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 8px;
`;

const BoardInfo = styled.div`
  margin: 8px;
  padding: 8px;
  border: 2px solid black;
`;

const UserInfo = styled.div`

`;

class Boards extends React.Component {

  render() {
    const {
      boards,
      actions: {
        getAllBoards
      }
    } = this.props;

    return (
      <Conatiner>
        <Button style={{
          width: 200,
          margin: 4
        }} variant="primary" onClick={getAllBoards}> Click me to load data! </Button>
        <Button style={{
          width: 200,
          margin: 4
        }} variant="primary"> Click me to load data! </Button>
        {
          boards && boards.map(board => (
            <BoardInfo key={board.id}>
              {`Board INFO: ${board.id} ${board.boardTitle} ${board.boardDescription}`}

              <Button as={NavLink} to="/boards/lol">
                Go to board
              </Button>

              <hr/>

              {/*{board.users.map(user => (*/}
              {/*  <UserInfo key={user.id}>*/}
              {/*    {`User INFO: ${user.id} ${user.username} ${user.firstName} ${user.lastName} ${user.email}`}*/}
              {/*  </UserInfo>*/}
              {/*))}*/}
            </BoardInfo>
          ))
        }
      </Conatiner>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.boards
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);