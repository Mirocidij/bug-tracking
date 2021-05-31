import React from 'react'
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 4px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  min-height: 100px;
  position: relative;
  text-decoration: none;

  overflow-y: hidden;
  overflow-x: hidden;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    )
  }
}