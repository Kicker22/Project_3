import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Questions from "../Images/questions.png";
import Savings from "../Images/savings.png";
import Meetup from "../Images/meetup.png";
import Slide1 from "../Images/slide1.png";
import Slide2 from "../Images/slide2.png";
import Slide3 from "../Images/slide3.png";
import Button from "react-bootstrap/Button";
// import Jumbotron from "react-bootstrap/Jumbotron";

export default class index extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-3">
          <h1 className="flex-center">Mommie Blog</h1>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link className="text-info" href="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-info" href="/content">
                Browse
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
       
          <Row className="py-4">
            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Questions} alt="Card image"/>
                <Card.Footer>
                  <Button variant="outline-dark" href="/questions">
                    VIEW
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Savings} alt="Card image"/>
                <Card.Footer>
                  <Button variant="outline-dark" href="/savings">
                    VIEW
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Meetup} alt="Card image"/>
                <Card.Footer>
                  <Button variant="outline-dark" href="/meetup">
                    VIEW
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
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
