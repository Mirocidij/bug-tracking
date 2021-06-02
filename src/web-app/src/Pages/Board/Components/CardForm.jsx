import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CardForm = ({ cardProps, handleClose, handleSubmit }) => {

  const [title, setTitle] = useState(cardProps.title);
  const [description, setDescription] = useState(cardProps.description);
  const [category, setCategory] = useState(cardProps.category);
  const [urgency, setUrgency] = useState(cardProps.urgency);

  let innerHandleSubmit = (e) => {
    e.preventDefault()

    handleSubmit({
      ...cardProps,
      title,
      description,
      category,
      urgency
    })
  }

  return (
    <Form onSubmit={innerHandleSubmit}>
      <Form.Group>
        <Form.Label>Заголовок:</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Описание:</Form.Label>
        <Form.Control
          value={description}
          onChange={e => setDescription(e.target.value)}
          as="textarea"
          rows={6}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Категория:</Form.Label>
        <Form.Control
          value={category}
          onChange={e => setCategory(e.target.value)}
          as="select"
        >
          <option>Без категории</option>
          <option>Баг на сервере</option>
          <option>Баг на клиенте</option>
          <option>Улучшение</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Срочность:</Form.Label>
        <Form.Control
          value={urgency}
          onChange={e => setUrgency(e.target.value)}
          as="select"
        >
          <option> </option>
          <option>Бессрочная</option>
          <option>Желательно выполнить</option>
          <option>Нужно выполнить</option>
          <option>Срочная</option>
        </Form.Control>
      </Form.Group>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </Modal.Footer>
    </Form>
  )
}

export default CardForm;