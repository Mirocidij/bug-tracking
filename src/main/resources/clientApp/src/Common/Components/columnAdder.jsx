import React from "react";
import { Button } from "react-bootstrap";

export default class ColumnAdder extends React.Component {
  render() {
    const { addNewColumn } = this.props;

    return (
      <>
        <Button
          variant="primary"
          onClick={addNewColumn}
        >
          Add new column
        </Button>
      </>
    )
  }
}