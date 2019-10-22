// user posting page

import React, { Component } from "react";
import BlogPost from "../Components/Form/user";
import TopNavbar from "../Components/Navbar/TopNavbar";
import { Container, Nav, Card, Row, Button } from "react-bootstrap"
export default class user extends Component {
  render() {
    return (
      <div>
        <Container className = "text-center">
        <TopNavbar>
        </TopNavbar>
        <BlogPost />
        </Container>
        <Container className = "text-center">
        <h1 className="text-center m-auto p-3 text-info">Past Posts</h1>
        <Row>
              <Card className="content-card" style={{ width: "19rem" }}>
                <Card.Body>
                  <Card.Title>Past Post</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Go To</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "19rem" }}>
                <Card.Body>
                  <Card.Title>Past Post</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Go To</Button>
                </Card.Body>
              </Card>
              <Card className="content-card" style={{ width: "19rem" }}>
                <Card.Body>
                  <Card.Title>Past Post</Card.Title>
                  <Card.Text>Auto filled blog cards</Card.Text>
                  <Button variant="primary">Go To</Button>
                </Card.Body>
              </Card>
            </Row>
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
