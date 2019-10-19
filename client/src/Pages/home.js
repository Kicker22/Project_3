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
import Blog from '../Components/Blog/blog'
import Questions from "../Images/questions.png";
import Savings from "../Images/savings.png";
import Meetup from "../Images/meetup.png";
import Slide1 from "../Images/slide1.png";
import Slide2 from "../Images/slide2.png";
import Slide3 from "../Images/slide3.png";
import GoogleLogin from "react-google-login";
import BlogCard from "../Components/Blog/blog";

export default class index extends Component {
  render() {
    const responseGoogle = response => {
      console.log(response);
    };
    return (
      <div>
        <Container className="m-auto text-center">
          <h1 className="text-center pt-2">Mommie Blog</h1>
          <Nav className="justify-content-center my-4" activeKey="/home">
            <Nav.Item>
              <GoogleLogin
                className="border-info 2px pr-2"
                clientId="611766802619-noklm26o6sth3h5jc58lcm8h88vdv72u.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                redirectUri={"localhost:3000/content"}
              ></GoogleLogin>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-info" href="/articles">
                Browse
              </Nav.Link>
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
              <BlogCard 
              Featured={Blog.featured}
              Title={Blog.title}
              CardText={Blog.text}
              />
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <BlogCard 
              Featured={Blog.featured}
              Title={Blog.title}
              CardText={Blog.text}
              />
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <BlogCard 
              Featured={Blog.featured}
              Title={Blog.title}
              CardText={Blog.text}
              />
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <BlogCard 
              Featured={Blog.featured}
              Title={Blog.title}
              CardText={Blog.text}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
