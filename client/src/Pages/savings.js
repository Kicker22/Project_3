import React, { Component } from "react";
import {
  Button,
  Nav,
  Jumbotron,
  Card,
  Row,
  Container,
  Carousel
} from "react-bootstrap";
import TopNavbar from "../Components/Navbar/TopNavbar"
export default class savings extends Component {
  render() {
    return (
      <div>
        <TopNavbar>
          
        </TopNavbar>
        <Container className="text-center mt-4">
          <h1 clasName="flex-center">Savings Page!</h1>
          <br />
          <h2>Find deals here!</h2>
         
          <Jumbotron className="content-center mt-4 bg-transparent">
            <Row>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 1</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 2</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 3</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 4</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 5</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 6</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 7</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 8</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Blog 9</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Join Blog</Button>
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
