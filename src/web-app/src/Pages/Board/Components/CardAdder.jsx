import React from "react";
import { Button } from "react-bootstrap";

export default class CardAdder extends React.Component {
  render() {
    const { addNewCard } = this.props;

    return (
      <Button
        style={{
          width: "100%"
        }}
        onClick={addNewCard}
        variant="primary"
      >
        Add new card
      </Button>
    )
  }
}