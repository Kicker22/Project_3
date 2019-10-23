import React, { Component } from "react";
import {
  Nav,
  Jumbotron,
  Card,
  Row,
  Container,
  Image
} from "react-bootstrap";
import Topics from "../Components/Topics/Topics"
import Meetup from "../Images/meetup.png";
export default class meetups extends Component {
  
  render() {
    return (
      <div>
        <Container className="text-center mt-4">
          <br />
          <br />
          <Image src={Meetup} fluid />
          <br />
          <Jumbotron className="content-center mt-4 bg-transparent">
            <h2 className="flex-center">Find, Connect, and Grow</h2>
            <Row>
                <Card.Body>
                  <Topics
                  />
                </Card.Body>
            
            </Row>
          </Jumbotron>
          <Nav.Item>
            <Nav.Link className="text-info py-4" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
        </Container>
      </div>
    );
  }
}
