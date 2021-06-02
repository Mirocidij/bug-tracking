import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskListColumn from "./Components/TaskListColumn";
import { Button, Modal } from "react-bootstrap";
import CardForm from "./Components/CardForm";
import ColumnAdder from "./Components/ColumnAdder";

const BoardWrapper = styled.div`
  margin: 4px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  overflow-x: auto;
  overflow-y: hidden;
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

    this.state = {
      active: false,
      currentTaskInModal: {},
      currentListIdInModal: 'column-0'
    }
  }

  render() {
    const {
      boardState: {
        boardDataIsLoading,
        tasks,
        columns,
        columnOrder,
        lastColumnId
      },
      actions: {
        loadBoardData,
        onDragEnd,
        saveNewCard,
        addNewColumn
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
                        <TaskListColumn
                          key={columnProps.id}
                          column={columnProps}
                          tasks={tasksProps}
                          index={index}
                          addNewCard={(active, task) => {
                            this.setState({
                              ...this.state,
                              active: active,
                              currentTaskInModal: {
                                ...task
                              },
                              currentListIdInModal: columnProps.id
                            });
                          }}
                        />
                      )
                    })}
                    {provided.placeholder}
                    <ColumnAdder
                      addNewColumn={addNewColumn}
                    />
                  </Container>
                </BoardCanvas>
              </BoardMainContent>
            )}
          </Droppable>
        </DragDropContext>
        <Modal
          show={this.state.active}
          onHide={() => console.log("On hide")}
        >
          <Modal.Header closeButton onHide={() => this.setState({ active: false })}>
            <Modal.Title>
              {
                this.state.currentTaskInModal.id
                  ? "Редактирование карточки"
                  : "Создание карточки"
              }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardForm
              handleSubmit={(newCardData) => {
                saveNewCard(
                  this.state.currentListIdInModal,
                  newCardData
                )

                this.setState({ active: false })
              }}
              cardProps={this.state.currentTaskInModal}
              handleClose={() => this.setState({ active: false })}
            />
          </Modal.Body>
        </Modal>
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