import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "../../Common/Components/column";

const BoardWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: auto;
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
      <BoardWrapper>
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
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
            )}
          </Droppable>
        </DragDropContext>
      </BoardWrapper>
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