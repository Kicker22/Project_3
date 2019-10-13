import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import cardImg from "../../Images/card.png";
import Slide1 from "../../Images/test.png";

export default class index extends Component {
  render() {
    return (
      <div>
        <Container>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/browes">Browes</Nav.Link>
            </Nav.Item>
          </Nav>

          <br />
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide1} alt="Third slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide1} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          <Row>
            <Col>
              <Card className="bg-dark text-white 100px100">
                <Card.Img src={cardImg} alt="Card image" />
              </Card>
            </Col>

            <Col>
              <Card className="bg-dark text-white 100px100">
                <Card.Img src={cardImg} alt="Card image" />
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white 100px100">
                <Card.Img src={cardImg} alt="Card image" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
