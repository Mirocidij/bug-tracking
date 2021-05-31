import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "./Components/column";

const BoardWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const BoardMainContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  position: relative;
  transition: margin .1s ease-in;
`;
const BoardCanvas = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, .24) 0, rgba(0, 0, 0, .24) 48px, transparent 80px, transparent);
`;
const Container = styled.div`
  user-select: none;
  white-space: nowrap;
  //margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {
      boardState: {
        boardDataIsLoading,
        tasks,
        columns,
        columnOrder
      },
      actions: {
        loadBoardData,
        onDragEnd
      }
    } = this.props;

    return (
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <BoardMainContent>
              <BoardCanvas>
                <Container
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {columnOrder.map((columnId, index) => {
                    const columnProps = columns[columnId];
                    const tasksProps = columnProps.tasksIds.map((taskId) => tasks[taskId]);

                    return (
                      <Column
                        key={columnProps.id}
                        column={columnProps}
                        tasks={tasksProps}
                        index={index}
                      />
                    )
                  })}
                  {provided.placeholder}
                </Container>
              </BoardCanvas>
            </BoardMainContent>
          )}
        </Droppable>
      </DragDropContext>

    )
  }
}

const mapStateToProps = (state) => ({
  boardState: state.board
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);