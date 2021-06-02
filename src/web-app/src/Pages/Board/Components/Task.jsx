import React from 'react'
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  width: auto;
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
`;

export default class Task extends React.Component {
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
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            onClick={this.props.openModal}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getStyle(provided.draggableProps.style, snapshot)}
          >
            {this.props.task.title}
          </Container>
        )}
      </Draggable>
    )
  }
}