import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const CardAdderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class CardAdder extends React.Component {
  render() {
    const { addNewCard } = this.props;

    return (
      <CardAdderWrapper>
        <Button
          onClick={() => addNewCard({
            title: '',
            description: ''
          })}
          variant="primary"
        >
          Добавить новую карточку
        </Button>
      </CardAdderWrapper>
    )
  }
}