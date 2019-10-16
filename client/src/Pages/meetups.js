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
import Slide1 from "../Images/slide1.png";
import Slide2 from "../Images/slide2.png";
import Slide3 from "../Images/slide3.png";
export default class meetups extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-4">
          <h1 clasName="flex-center">Mommie Blog</h1>
          <br />
          <h2>Featured Blogs</h2>
          <br />
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide1} alt="First slide" />
              <Carousel.Caption className="text-light">
                <h3>Fun At home</h3>
                <p>Find Something Fun at Home Here!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide2} alt="Second slide" />
              <Carousel.Caption className="text-dark">
                <h3>Budgeting</h3>
                <p>Find ways to save money!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide3} alt="Third slide" />
              <Carousel.Caption className="text-secondary">
                <h3>Mommy Meetups</h3>
                <p>Find your get together mommy group!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br />
          <Jumbotron className="content-center mt-4 bg-transparent">
            <h2 className="flex-center">Find a Blog to checkout!</h2>
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
