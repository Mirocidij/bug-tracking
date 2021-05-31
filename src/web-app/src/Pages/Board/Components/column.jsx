import React from "react";
import styled from "styled-components";
import Task from './task'
import { Draggable, Droppable } from "react-beautiful-dnd";
import CardAdder from "./cardAdder";

const Container = styled.div`
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`;
const ColumnContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
`;
const Title = styled.h3`
  flex: 0 0 auto;
  padding: 10px 8px;
  position: relative;
  min-height: 20px;
`;
const TaskList = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 4px;
  padding: 0 4px;
  min-height: 0;

  //box-sizing: border-box;
  //padding: 8px;
  //
  //width: 250px;
  //overflow-y: auto;
  //overflow-x: hidden;
  //max-height: 800px;
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
              <ColumnContent>
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
              </ColumnContent>
            </Container>
          )
        }
      </Draggable>
    )
  }
}