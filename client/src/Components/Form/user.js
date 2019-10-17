import React from "react";

import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";



export default function user() {
  return (
    <Container className="my-4">
      <br />
      <br />
      <h1 className="text-center m-auto p-3 text-info">Ready to Post?</h1>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="name" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Whats on your mind?</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Post to Blog" />
        </Form.Group>
        <Button variant="secondary" type="submit" formTarget="/articles">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
