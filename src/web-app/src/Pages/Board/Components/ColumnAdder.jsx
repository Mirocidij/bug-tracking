import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ColumnAdderWrapper = styled.div`
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`;

export default class ColumnAdder extends React.Component {
  render() {
    const { addNewColumn } = this.props;

    return (
      <ColumnAdderWrapper>
        <Button
          variant="primary"
          onClick={addNewColumn}
        >
          Добавить новую колонку
        </Button>
      </ColumnAdderWrapper>
    )
  }
}