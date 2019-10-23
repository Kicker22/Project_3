import React from "react";
import {Navbar, Container } from 'react-bootstrap'
import { Nav } from "react-bootstrap";

export default function nav() {
  return (
      <Container fluid className="text-center">
      <Navbar className="p-4 fixed-bottom">
        <Nav.Item>
            <Nav.Link className="text-info" href="/">Home</Nav.Link>
        </Nav.Item>
      </Navbar>
      </Container>
  
  );
}
