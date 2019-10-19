import React from "react";
import {
    Button,
    Card
  } from "react-bootstrap";

export default function BlogCard(props) {
  return (
    <div>
      <Card>
        <Card.Header className="bg-dark text-light">{props.featured}</Card.Header>
        <Card.Body>
          <Card.Title>
            {props.title}
          </Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">Read</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
