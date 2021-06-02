import React from "react";
import * as actions from "./Redux/actions";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fafbfc;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 8px;
  margin: 8px;
`;

const BoardTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 170%;
`;

const BoardInfo = styled.div`
  margin: 8px;
  padding: 8px;
  width: 250px;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  display: block;
  background-color: rgba(0,0,0,.15);

  background-image: ${props => props.backgroundImage
          ? `url(${props.backgroundImage})`
          : 'none'
  };
  background-size: 100% 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

class UserBoards extends React.Component {
  componentDidMount() {
    this.props.actions.getAllBoards();
  }

  render() {
    const {
      boards,
      actions: {
        getAllBoards
      }
    } = this.props;

    return (
      <Container>
        {
          boards && boards.map(board => (
            <BoardInfo backgroundImage={board.backgroundImageUrl} key={board.id}>
              <BoardTitle>{board.boardTitle}</BoardTitle>
            </BoardInfo>
          ))
        }
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserBoards);