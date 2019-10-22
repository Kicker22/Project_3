import React, { Component } from "react";
import {
  Button,
  Nav,
  Jumbotron,
  Card,
  Row,
  Container,
  Image
} from "react-bootstrap";
import Meetup from "../Images/meetup.png";
// import Slide2 from "../Images/slide2.png";
// import Slide3 from "../Images/slide3.png";
import TopNavbar from "../Components/Navbar/TopNavbar"
export default class meetups extends Component {
  
  render() {
    return (
      <div>
        <TopNavbar>
          
        </TopNavbar>
        <Container className="text-center mt-4">
          <br />
          <br />
          <Image src={Meetup} fluid />
          <br />
          <Jumbotron className="content-center mt-4 bg-transparent">
            <h2 className="flex-center">Find, Connect, and Grow</h2>
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
