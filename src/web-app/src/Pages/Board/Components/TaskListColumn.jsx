import React from "react";
import styled from "styled-components";
import Task from './Task'
import { Draggable, Droppable } from "react-beautiful-dnd";
import CardAdder from "./CardAdder";
import { Form } from "react-bootstrap";

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
  background-color: #ebecf0;;
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
  margin: 0 4px;
  padding: 0 4px;
  min-height: 20px;
  box-sizing: content-box;
`;

export default class TaskListColumn extends React.Component {
  render() {
    function getStyle(style, snapshot) {
      if (!snapshot.isDropAnimating) {
        return style;
      }
      return {
        ...style,
        // cannot be 0, but make it super tiny
        transitionDuration: `0.001s`,
      };
    }

    return (
      <Draggable
        draggableId={this.props.column.id}
        index={this.props.index}
      >
        {
          (provided, snapshot) => (
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
              style={getStyle(provided.draggableProps.style, snapshot)}
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
                      {
                        this.props.tasks.map((task, index) => {
                          return (
                            <Task
                              openModal={() => this.props.addNewCard(true, task)}
                              key={task.id}
                              task={task}
                              index={index}/>
                          )
                        })}
                      {provided.placeholder}
                    </TaskList>
                  )}
                </Droppable>
                <div style={{
                  padding: 8
                }}>
                  <CardAdder
                    addNewCard={(newCard) => {
                      this.props.addNewCard(true, newCard);
                    }}
                  />
                </div>
              </ColumnContent>
            </Container>
          )
        }
      </Draggable>
    )
  }
}