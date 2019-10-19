import React, { Component } from "react";
import {
  Button,
  Nav,
  Jumbotron,
  Card,
  Row,
  Container,
  Image,
  Table,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Questions from "../Images/questions.png";
export default class meetups extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-4">
          <br />
          <br />
          <Image src={Questions} fluid />
          <br />
          <Jumbotron className="content-center mt-4 bg-transparent">
            <h2 className="flex-center">Questions & Answers</h2>
            <p className="flex-center">
              Find answers to questions you may have or, help other community
              members with questions they and grow your reputation.
            </p>
            <Row>
              <Card className="content-card w-100">
                <Card.Body>
                  <Card.Title>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Question</th>
                          <th>Answer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mom1234</td>
                          <td>What is a good substitute for whole milk?</td>
                          <td>
                            <InputGroup className="mb-3">
                              <FormControl
                                placeholder="Answer here"
                                aria-label="Answer here"
                                aria-describedby="basic-addon2"
                              />
                              <InputGroup.Append>
                                <Button variant="outline-secondary">
                                  Button
                                </Button>
                              </InputGroup.Append>
                            </InputGroup>
                          </td>
                        </tr>
                        <tr>
                        <td>2</td>
                          <td> momOf5</td>
                          <td>My 2 year old will not sleep. Any suggestions?</td>
                          <td>
                            <InputGroup className="mb-3">
                              <FormControl
                                placeholder="Answer here"
                                aria-label="Answer here"
                                aria-describedby="basic-addon2"
                              />
                              <InputGroup.Append>
                                <Button variant="outline-secondary">
                                  Button
                                </Button>
                              </InputGroup.Append>
                            </InputGroup>
                          </td>
                        </tr>
                        <tr>
                        <td>3</td>
                          <td>
                            Mamabear
                          </td>
                          <td>How do you make soap?</td>
                          <td>
                            <InputGroup className="mb-3">
                              <FormControl
                                placeholder="Answer here"
                                aria-label="Answer here"
                                aria-describedby="basic-addon2"
                              />
                              <InputGroup.Append>
                                <Button variant="outline-secondary">
                                  Button
                                </Button>
                              </InputGroup.Append>
                            </InputGroup>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Title>
                  <Button variant="primary">Join Group</Button>
                </Card.Body>
              </Card>
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
