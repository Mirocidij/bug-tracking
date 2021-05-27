import React from "react";
import styled from "styled-components";
import Task from './task'
import { Draggable, Droppable } from "react-beautiful-dnd";
import CardAdder from "./cardAdder";

const Container = styled.div`
  background-color: #EBECF0;
  border-radius: 3px;
  box-sizing: border-box;
  width: auto;
  margin-left: 8px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  position: sticky;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => props.isDraggingOver ? 'skyblue' : 'inherit'};
  width: 250px;
  max-height: 100%;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.column.id}
        index={this.props.index}
      >
        {
          (provided) => (
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <Title {...provided.dragHandleProps}>
                {this.props.column.title}
              </Title>
              <Droppable
                droppableId={this.props.column.id}
                type="task"
              >
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {this.props.tasks.map((task, index) =>
                      <Task
                        key={task.id}
                        task={task}
                        index={index}/>)}
                    {provided.placeholder}
                    <CardAdder
                      addNewCard={() => {
                        console.log(this.props.column)
                      }}
                    />
                  </TaskList>
                )}
              </Droppable>
            </Container>
          )
        }
      </Draggable>
    )
  }
}