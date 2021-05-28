import React from 'react'
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 2px solid lightblue;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  //width: 200px;

  display: flex;
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