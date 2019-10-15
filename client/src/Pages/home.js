import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import CardFooterQB from "../Components/CardFooter/questions";
import Questions from "../Images/questions.png";
import Savings from "../Images/savings.png";
import Meetup from "../Images/meetup.png";
import Slide1 from "../Images/slide1.png";
import Slide2 from "../Images/slide2.png";
import Slide3 from "../Images/slide3.png";
import Button from "react-bootstrap/Button";
import  GoogleLogin  from "react-google-login";
import content from "./content"


export default class index extends Component {
  
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div>
        
        <Container className="text-center mt-4">
          <h1 clasName="flex-center">Mommie Blog</h1>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
            <GoogleLogin
          clientId="611766802619-noklm26o6sth3h5jc58lcm8h88vdv72u.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          redirectUri={"localhost:3000/content"}
          >

          </GoogleLogin>
            </Nav.Item>
            <Nav.Item>

              <Nav.Link className="text-info" href="/browse">Browse</Nav.Link>

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
                  <Button variant="outline-dark" href="/meetup">
                    VIEW
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
