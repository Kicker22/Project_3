import React, { Component } from "react";
import {
  Button,
  Nav,
  Card,
  Row,
  Container,
  Carousel,
  Col
} from "react-bootstrap";
import Questions from "../Images/questions.png";
import Savings from "../Images/savings.png";
import Meetup from "../Images/meetup.png";
import Slide1 from "../Images/slide1.png";
import Slide2 from "../Images/slide2.png";
import Slide3 from "../Images/slide3.png";
import Auth from "../Components/googleAuth/Auth"

export default class index extends Component {
  render() {

    return (
      <div>
        <Container className="m-auto text-center">
          <h1 className="text-center pt-2">Mommie Blog</h1>
          <Nav className="justify-content-center my-4" activeKey="/home">
            <Nav.Item></Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-info" href="/articles">
                Browse
              </Nav.Link>
                <Auth/>
            </Nav.Item>
          </Nav>

          <h1 className="text-center pt-2">Featured Blogs</h1>
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

          <Row className="py-4 p-auto m-auto">
            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Questions} alt="Card image" />
                <Card.Footer>
                  <Button variant="outline-dark" href="/questions">
                    VIEW
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Savings} alt="Card image" />
                <Card.Footer>
                  <Button variant="outline-dark" href="/savings">
                    VIEW
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Meetup} alt="Card image" />
                <Card.Footer>
                  <Button variant="outline-dark" href="/meetups">
                    VIEW
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="mb-4">
          <Row className="pt-4 pb-2">
            <Col>
              <Card>
                <Card.Header className="bg-dark text-light">
                  Featured
                </Card.Header>
                <Card.Body>
                  <Card.Title>User1</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="py-2">
            <Col>
              <Card>
                <Card.Header className="bg-dark text-light">
                  Featured
                </Card.Header>
                <Card.Body>
                  <Card.Title>User2</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="py-2">
            <Col>
              <Card>
                <Card.Header className="bg-dark text-light">
                  Featured
                </Card.Header>
                <Card.Body>
                  <Card.Title>User3</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
