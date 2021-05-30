import initialData from "./initialData";
import React from "react";
import Column from './Common/Components/column'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const BordWrapper = styled.div`
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

class AppDnd extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder
      }

      this.setState(newState)
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTasksIds = Array.from(start.tasksIds);
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        tasksIds: newTasksIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState)
    } else {
      const startTaskIds = Array.from(start.tasksIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        tasksIds: startTaskIds,
      }

      const finishTasksIds = Array.from(finish.tasksIds);
      finishTasksIds.splice(destination.index, 0, draggableId)
      const newFinish = {
        ...finish,
        tasksIds: finishTasksIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      }

      this.setState(newState)
    }
  }

  onNewColumnHandler = () => {
    const newColumnId = 'column-' + (this.state.lastColumnId + 1);

    const newColumns = {
      ...this.state.columns,
      [newColumnId]: {
        id: newColumnId,
        title: 'Test ^_^' + newColumnId,
        tasksIds: [],
      }
    }

    const newColumnOrder = Array.from(this.state.columnOrder);
    newColumnOrder.push(newColumnId);

    const newState = {
      ...this.state,
      columns: newColumns,
      columnOrder: newColumnOrder,
      lastColumnId: this.state.lastColumnId + 1
    }

    this.setState(newState)
  }

  render() {
    return (
      <BordWrapper>
        <DragDropContext
          onDragEnd={this.onDragEnd}
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
                {
                  this.state.columnOrder.map((columnId, index) => {
                    const column = this.state.columns[columnId];
                    const tasks = column.tasksIds.map((taskId) => this.state.tasks[taskId]);

                    return <Column
                      key={column.id}
                      column={column}
                      tasks={tasks}
                      index={index}
                    />
                  })
                }
                {
                  provided.placeholder
                }
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </BordWrapper>
    )
  }
}

export default AppDnd;