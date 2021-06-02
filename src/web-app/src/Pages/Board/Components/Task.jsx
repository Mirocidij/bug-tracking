import React from 'react'
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  width: auto;
  padding: 4px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  display: block;
  margin-bottom: 8px;
  min-height: 100px;
  position: relative;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CardTitle = styled.div`
  
`;

function getColorByUrgency(urgency) {
  switch (urgency) {
    case 'Бессрочная': return 'green';
    case 'Желательно выполнить': return 'lightgreen';
    case 'Нужно выполнить': return 'yellow';
    case 'Срочная': return 'red';
    default:
      return 'transparent'
  }
}

const CardUrgency = styled.div`
  margin: 4px;
  width: 35px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => getColorByUrgency(props.urgency)};
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
            <CardContent>
              {this.props.task.urgency && <CardUrgency urgency={this.props.task.urgency} />}
              <CardTitle>{this.props.task.title}</CardTitle>
            </CardContent>
          </Container>
        )}
      </Draggable>
    )
  }
}