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

export default class index extends Component {
  render() {
    return (
      <div>

        <Container className="text-center mt-4">
          <h1 clasName="flex-center">Mommie Blog</h1>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/browse">Browse</Nav.Link>
            </Nav.Item>
          </Nav>

          <br />
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
          <br />
          <Row>
            <Col>
              <Card className="bg-dark text-white 100px100">
                <Card.Img src={Questions} alt="Card image" />
              </Card>
            </Col>

            <Col>
              <Card className="bg-dark text-white 100px100">
                <Card.Img src={Savings} alt="Card image" />
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white 100px100">
                <Card.Img src={Meetup} alt="Card image" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
