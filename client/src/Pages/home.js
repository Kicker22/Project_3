import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styleSheets/home.css";
import Questions from "../Images/questions.png";
import Savings from "../Images/savings.png";
import Meetup from "../Images/meetup.png";
import Slide1 from "../Images/slide1.png";
import Slide2 from "../Images/slide2.png";
import Slide3 from "../Images/slide3.png";
// import BlogCard from "../Components/Blog/blog";
import ArticleCard from "../Components/Axios/ArticleCard";
import TopNavbar from "../Components/Navbar/TopNavbar";
import {
  Button,
  Nav,
  Card,
  Row,
  Container,
  Carousel,
  Col
} from "react-bootstrap";

export default class index extends Component {
  state = {};

  render() {
    return (
      <div>
        <TopNavbar/>
        <h1 className="title text-center pt-2">Mommie Blog</h1>
          <br />
        <Container className="m-auto text-center">
        <h3 className="">Mommie Blog is a one stop shop for moms to come and converse with other moms. Post your own tips and tricks for everyday life as a mom and ask questions to recieve feedback. You can also post any sales that you might have found at your local grocery store and find meet ups with other moms in your area.  </h3>
          <Nav className="justify-content-center my-4" activeKey="/home">
            <Nav.Item></Nav.Item>
            <Nav.Item>
              {/* <Nav.Link className="text-info" href="/articles">
                Browse
              </Nav.Link> */}
            </Nav.Item>
          </Nav>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide1} alt="First slide" />
              <Carousel.Caption className="text-light">
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide2} alt="Second slide" />
              <Carousel.Caption className="text-dark">
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Slide3} alt="Third slide" />
              <Carousel.Caption className="text-secondary">
            
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Row className="py-4 p-auto m-auto">
            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Questions} alt="Card image" />
                <Card.Footer>
                  <Link to={{
                    pathname:'/questionlist'
                  }}>
                  <Button
                    variant="outline-dark"
                  >
                    Ask Question
                  </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Savings} alt="Card image" />
                <Card.Footer>
                  <Link to={{
                    pathname:'/savings'
                  }}>
                  
                  <Button
                    variant="outline-dark">
                    view sales
                  </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent 100px100">
                <Card.Img src={Meetup} alt="Card image" />
                <Card.Footer>
                  <Link
                    to={{
                      pathname: "/meetups"
                    }}
                  >
                    <Button
                      variant="outline-dark"
                    >
                     MeetUps
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
          <br />
        <h1 className="title text-center pt-5 pb-4">Featured Posts</h1>
        <Container className="mb-4 artcile-cards-container">
          {/* <Link to="/create"> */}
          <button
            onClick={() => (window.location.href = "/create")}
            type="submit"
            id="testButton"
            className="btn btn-primary btn-lg btn-block mx-auto my-4"
          >
            Create Blog Post
          </button>
          {/* </Link> */}
          <ArticleCard />
        </Container>
      </div>
    );
  }
}
